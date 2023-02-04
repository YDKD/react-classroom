import { encryptData } from '@/api/common'
import { registerUserApi, sendEmailCodeApi, updateUserApi } from '@/api/user'
import { IRegisterData, ISendEmail } from '@/api/user/type'
import { ILoginAndRegisterModalProps } from '@/components/app-header/components/ah-right/type'
import { Modal, Form, Button, Input, Row, Col, message } from 'antd'
import { memo, useState } from 'react'
import RegisterOrForgotModalWrapper from './RegisterOrForgotModalWrapper'

const RegisterOrForgotModal = memo((props: ILoginAndRegisterModalProps) => {
  console.log('propsxx', props)
  const [form] = Form.useForm()
  const [disabledBtn, setDisabledBtn] = useState(false)
  const [count, setCount] = useState(60)
  // const [messageApi, contextHolder] = message.useMessage()

  const isRegister = props.clickType === 'register'

  const modalTitle = isRegister ? '邮箱注册' : '邮箱找回'

  function handleCancel() {
    // 关闭弹窗
    props.setModalOpen(false)
    // 重置表单
    form.resetFields()
  }

  /**
   * @description: 去登录
   * @author: YDKD
   */
  const goLogin = () => {
    props.setModalOpen(false)
    props.setClickType && props.setClickType('login')
  }

  const onFinish = async (values: any) => {
    const encryptInfo = {
      data: values.password
    }

    // 调用加密接口进行密码加密
    const { data: encryptPasswd } = await encryptData(encryptInfo)

    const data: IRegisterData = {
      email: values.email,
      emailCode: values.emailCode,
      password: encryptPasswd
    }

    const request = isRegister ? registerUserApi : updateUserApi

    request(data).then((res) => {
      if (res.status === 200) {
        const tips = isRegister ? '注册成功' : '密码找回成功！'
        message.success(tips)
        goLogin()
      } else {
        message.error(res.msg)
      }

      form.resetFields()
    })
  }

  /**
   * @param {string} fieldName 字段名
   * @description: 根据字段名校验表单
   * @author: YDKD
   */
  const validateField = (fieldName: string) => {
    form.validateFields([fieldName])
  }

  const sendEmailCode = () => {
    if (form.getFieldValue('email') === '') {
      message.error('请输入邮箱')
      return
    }
    const data: ISendEmail = {
      email: form.getFieldValue('email')
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
          setCount((count) => count - 1)
        }, 1000)
        setTimeout(() => {
          clearInterval(timer)
          setCount(60)
          setDisabledBtn(false)
        }, 60000)
      })
  }
  return (
    <RegisterOrForgotModalWrapper>
      <Modal
        wrapClassName={'registerModal'}
        getContainer={false}
        open={props.modalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="register">
          <div className="title">{modalTitle}</div>
          <div className="form-wrapper">
            <Form name={props.clickType} form={form} onFinish={onFinish}>
              {/* 邮箱 */}
              <Form.Item
                name="email"
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
                  onBlur={() => validateField('email')}
                />
              </Form.Item>

              {/* 密码 */}
              <Form.Item
                name="password"
                hasFeedback
                rules={[
                  {
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
                        callback(
                          '密码必须包含大写字母、小写字母、数字、特殊字符'
                        )
                      } else {
                        callback()
                      }
                    }
                  }
                ]}
              >
                <Input.Password
                  placeholder="8至16位大写字母、小写字母、数字、特殊字符组成"
                  onBlur={() => validateField('password')}
                />
              </Form.Item>

              {/* 邮箱验证码 */}
              <Form.Item
                name="emailCode"
                hasFeedback
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
                      onBlur={() => validateField('emailCode')}
                    />
                  </Col>
                  <Col span={4}>
                    <Button disabled={disabledBtn} onClick={sendEmailCode}>
                      {disabledBtn ? `倒计时${count}秒` : '获取验证码'}
                    </Button>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item>
                <div
                  className="text text-right cursor-pointer"
                  onClick={goLogin}
                >
                  去登录
                </div>
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  className="btn"
                  onClick={() => form.validateFields()}
                >
                  注册
                </Button>
              </Form.Item>

              {props.clickType === 'register' && (
                <p className="text">*若已有账号，则无需再次注册</p>
              )}
            </Form>
          </div>
        </div>
      </Modal>
    </RegisterOrForgotModalWrapper>
  )
})

export default RegisterOrForgotModal
