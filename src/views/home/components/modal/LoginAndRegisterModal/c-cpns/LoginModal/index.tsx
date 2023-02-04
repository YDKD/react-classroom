import { encryptData } from '@/api/common'
import { loginApi } from '@/api/user'
import { IUserLogin } from '@/api/user/type'
import {
  ILoginAndRegisterModalProps,
  TBtnClickType
} from '@/components/app-header/components/ah-right/type'
import { Button, Form, Input, message, Modal } from 'antd'
import { memo, useState } from 'react'
import { useCookies } from 'react-cookie'
import LoginModalWrapper from './LoginModalWrapper'

const LoginModal = memo((props: ILoginAndRegisterModalProps) => {
  const [form] = Form.useForm()
  const [accessTokenCookie, setAccessTokenCookie] = useCookies(['accessToken'])
  const [refreshokenCookie, setRefreshTokenCookie] = useCookies([
    'refreshToken'
  ])

  function handleCancel() {
    // 关闭弹窗
    props.setModalOpen(false)
    // 重置表单
    form.resetFields()
  }

  const onFinish = async (values: any) => {
    const encryptInfo = {
      data: values.password
    }

    // 调用加密接口进行密码加密
    const { data: encryptPasswd } = await encryptData(encryptInfo)
    // 处理登录功能
    const data: IUserLogin = {
      email: values.email,
      password: encryptPasswd
    }

    loginApi(data).then((res) => {
      if (res.status === 200) {
        // 存入
        const { accessToken, refreshToken } = res.data
        setAccessTokenCookie('accessToken', accessToken, { path: '/' })
        setRefreshTokenCookie('refreshToken', refreshToken, { path: '/' })

        message.success(res.msg)
      } else {
        message.error(res.msg)
      }

      form.resetFields()
    })
  }

  const goRegisterOrForget = (type: TBtnClickType) => {
    props.setModalOpen(false)
    props.setClickType && props.setClickType(type)
  }

  /**
   * @param {string} fieldName 字段名
   * @description: 根据字段名校验表单
   * @author: YDKD
   */
  const validateField = (fieldName: string) => {
    form.validateFields([fieldName])
  }

  return (
    <LoginModalWrapper>
      <Modal
        wrapClassName={'loginModal'}
        getContainer={false}
        open={props.modalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="register">
          <div className="title">邮箱登录</div>
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

              <Form.Item>
                <div className="text-right cursor-pointer fast-entrance">
                  <span
                    className="register-text"
                    onClick={() => goRegisterOrForget('register')}
                  >
                    注册
                  </span>
                  <span className="separator">|</span>
                  <span
                    className="forget-text"
                    onClick={() => goRegisterOrForget('forget')}
                  >
                    忘记密码
                  </span>
                </div>
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  className="btn"
                  onClick={() => form.validateFields()}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </LoginModalWrapper>
  )
})

export default LoginModal
