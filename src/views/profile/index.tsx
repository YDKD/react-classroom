import { memo, useState } from 'react'
import PersonalManageWrapper from './styled'
import { Button, Card, Form, Input, Row, message, Col } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { encryptData } from '@/api/common'
import {
  sendEmailCodeApi,
  updateUserInfoApi,
  updateUserPdApi
} from '@/api/user'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { clearUserInfo, getUserInfo } from '@/store/features/user'
import { ISendEmail, IUpdateUserPd } from '@/api/user/type'
import useLogout from '@/hooks/tools/useLogout'
import { updateUserEmailApi } from '@/api/user'

type TFormName = 'modify_username' | 'modify_password' | 'modify_email'

const PersonalManage = memo(() => {
  const [modifyNickForm] = Form.useForm()
  const [modifyPasswordForm] = Form.useForm()
  const [modifyEmailForm] = Form.useForm()

  const [disabledBtn, setDisabledBtn] = useState(false)
  const [count, setCount] = useState(60)

  // 获取派发函数
  const dispatch = useDispatch<AppDispatch>()

  const onFinishModifyUserNameForm = async (values: any) => {
    console.log(values)
    const { nick, password } = values
    const encryptInfo = {
      data: password
    }
    const { data: encryptPasswd } = await encryptData(encryptInfo)

    const updatedData = {
      nick: nick,
      password: encryptPasswd
    }

    updateUserInfoApi(updatedData).then((res) => {
      if (res.status === 200) {
        message.success('用户信息更新成功！')

        // 获取请求的数据
        dispatch(getUserInfo())
        modifyNickForm.resetFields()
      } else {
        message.error('用户信息更新失败！')
      }
    })
  }

  const onFinishModifyPasswordForm = async (values: any) => {
    console.log(values)
    const { oldPassword, newPassword } = values
    const encryptInfo = {
      data: oldPassword
    }
    const { data: encryptOldPasswd } = await encryptData(encryptInfo)

    const encryptNewInfo = {
      data: newPassword
    }
    const { data: encryptNewPasswd } = await encryptData(encryptNewInfo)

    const updatedData: IUpdateUserPd = {
      password: encryptOldPasswd,
      newPassword: encryptNewPasswd
    }

    updateUserPdApi(updatedData).then((res) => {
      if (res.status === 200) {
        message.success('密码更新成功，即将自动退出登录')
        dispatch(clearUserInfo())
        useLogout(300)
      } else {
        message.error('密码更新失败！')
      }
    })
  }

  const onFinishModifyEmailForm = async (values: any) => {
    console.log(values)
    const { email, password, emailCode } = values

    const encryptInfo = {
      data: password
    }

    const { data: encryptPasswd } = await encryptData(encryptInfo)

    const updatedData = {
      email: email,
      password: encryptPasswd,
      emailCode: emailCode
    }

    updateUserEmailApi(updatedData).then((res) => {
      if (res.status === 200) {
        message.success('邮箱更新成功！')
        dispatch(getUserInfo())
        modifyEmailForm.resetFields()
      } else {
        message.error('邮箱更新失败！')
      }
    })
  }

  const sendEmailCode = () => {
    if (modifyEmailForm.getFieldValue('email') === '') {
      message.error('请输入邮箱')
      return
    }
    const data: ISendEmail = {
      email: modifyEmailForm.getFieldValue('email')
    }

    sendEmailCodeApi(data)
      .then((res) => {
        if (res.status === 200) {
          message.success('发送成功，请注意查收！')
        } else {
          message.error(res.data)
        }
      })
      .finally(() => {
        setDisabledBtn(true)
        const timer = setInterval(() => {
          setCount((count: number) => count - 1)
        }, 1000)
        setTimeout(() => {
          clearInterval(timer)
          setCount(60)
          setDisabledBtn(false)
        }, 60000)
      })
  }

  /**
   * @param {string} fieldName 字段名
   * @description: 根据字段名校验表单
   * @author: YDKD
   */
  const validateField = (fieldName: string, formName: TFormName) => {
    if (formName === 'modify_username') {
      modifyNickForm.validateFields([fieldName])
    } else if (formName === 'modify_password') {
      modifyPasswordForm.validateFields([fieldName])
    } else if (formName === 'modify_email') {
      modifyEmailForm.validateFields([fieldName])
    }
  }

  return (
    <PersonalManageWrapper>
      {/* 用户名修改 */}
      <Card title="用户名修改" className="card-item">
        <Form
          name="modify_username"
          className="modify_username"
          onFinish={onFinishModifyUserNameForm}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          form={modifyNickForm}
        >
          <Form.Item
            name="nick"
            label="新用户名"
            rules={[
              {
                required: true,
                message: '请输入新用户名'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入用户名"
              onBlur={() => validateField('email', 'modify_username')}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                validator(rule, value, callback) {
                  if (!value) {
                    callback('请输入密码')
                  } else if (value.length < 8) {
                    callback('密码长度不能小于8位')
                  } else if (value.length > 16) {
                    callback('密码长度不能大于16位')
                  } else if (
                    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).+$/.test(
                      value
                    )
                  ) {
                    callback('密码必须包含大写字母、小写字母、数字、特殊字符')
                  } else {
                    callback()
                  }
                }
              }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="8至16位大写字母、小写字母、数字、特殊字符组成"
              onBlur={() => validateField('password', 'modify_username')}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* 密码修改 */}
      <Card title="密码修改" className="card-item">
        <Form
          name="modify_password"
          className="modify_password"
          onFinish={onFinishModifyPasswordForm}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          form={modifyPasswordForm}
        >
          <Form.Item
            name="oldPassword"
            label="旧密码"
            rules={[
              {
                required: true,
                validator(rule, value, callback) {
                  if (!value) {
                    callback('请输入旧密码')
                  } else if (value.length < 8) {
                    callback('密码长度不能小于8位')
                  } else if (value.length > 16) {
                    callback('密码长度不能大于16位')
                  } else if (
                    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).+$/.test(
                      value
                    )
                  ) {
                    callback('密码必须包含大写字母、小写字母、数字、特殊字符')
                  } else {
                    callback()
                  }
                }
              }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="8至16位大写字母、小写字母、数字、特殊字符组成"
              onBlur={() => validateField('oldPassword', 'modify_password')}
            />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label="新密码"
            rules={[
              {
                required: true,
                validator(rule, value, callback) {
                  if (!value) {
                    callback('请输入新密码')
                  } else if (value.length < 8) {
                    callback('密码长度不能小于8位')
                  } else if (value.length > 16) {
                    callback('密码长度不能大于16位')
                  } else if (
                    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).+$/.test(
                      value
                    )
                  ) {
                    callback('密码必须包含大写字母、小写字母、数字、特殊字符')
                  } else {
                    if (
                      modifyPasswordForm.getFieldValue('oldPassword') === value
                    ) {
                      callback('新密码不能与旧密码相同')
                    } else {
                      callback()
                    }
                  }
                }
              }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="8至16位大写字母、小写字母、数字、特殊字符组成"
              onBlur={() => validateField('newPassword', 'modify_password')}
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="确认新密码"
            rules={[
              {
                required: true,
                validator(rule, value, callback) {
                  if (!value) {
                    callback('请输入确认新密码')
                  } else if (value.length < 8) {
                    callback('密码长度不能小于8位')
                  } else if (value.length > 16) {
                    callback('密码长度不能大于16位')
                  } else if (
                    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).+$/.test(
                      value
                    )
                  ) {
                    callback('密码必须包含大写字母、小写字母、数字、特殊字符')
                  } else {
                    if (
                      value !== modifyPasswordForm.getFieldValue('newPassword')
                    ) {
                      callback('两次密码输入不一致')
                    } else {
                      callback()
                    }
                  }
                }
              }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="8至16位大写字母、小写字母、数字、特殊字符组成"
              onBlur={() => validateField('newPassword', 'modify_password')}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* 邮箱修改 */}
      <Card title="邮箱修改" className="card-item">
        <Form
          name="modify_email"
          className="modify_email"
          onFinish={onFinishModifyEmailForm}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          form={modifyEmailForm}
        >
          <Form.Item
            name="email"
            label="邮箱"
            hasFeedback
            rules={[
              {
                required: true,
                message: '请输入邮箱'
              },
              {
                type: 'email',
                message: '请输入正确的邮箱'
              }
            ]}
          >
            <Input
              placeholder="请输入邮箱"
              onBlur={() => validateField('email', 'modify_email')}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                validator(rule, value, callback) {
                  if (!value) {
                    callback('请输入密码')
                  } else if (value.length < 8) {
                    callback('密码长度不能小于8位')
                  } else if (value.length > 16) {
                    callback('密码长度不能大于16位')
                  } else if (
                    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).+$/.test(
                      value
                    )
                  ) {
                    callback('密码必须包含大写字母、小写字母、数字、特殊字符')
                  } else {
                    callback()
                  }
                }
              }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="8至16位大写字母、小写字母、数字、特殊字符组成"
              onBlur={() => validateField('newPassword', 'modify_password')}
            />
          </Form.Item>
          {/* 邮箱验证码 */}
          <Form.Item
            name="emailCode"
            hasFeedback
            label="邮箱验证码"
            rules={[
              {
                required: true,
                message: '请输入邮箱验证码'
              }
            ]}
          >
            <Row gutter={16}>
              <Col span={18}>
                <Input
                  placeholder="请输入邮箱验证码"
                  onBlur={() => validateField('emailCode', 'modify_email')}
                />
              </Col>
              <Col span={4}>
                <Button disabled={disabledBtn} onClick={sendEmailCode}>
                  {disabledBtn ? `倒计时${count}秒` : '获取验证码'}
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PersonalManageWrapper>
  )
})

export default PersonalManage
