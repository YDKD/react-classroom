import { sendEmailCodeApi } from '@/api/user'
import { Modal, Form, Button, Input, Row, Col, message } from 'antd'
import { memo, useState } from 'react'
import LoginModalWrapper from './styled'

interface IProps {
  modalOpen: boolean
  clickType: 'login' | 'register'
  setModalOpen: (open: boolean) => void
}

const LoginModal = memo((props: IProps) => {
  const [form] = Form.useForm()
  const [disabledBtn, setDisabledBtn] = useState(true)
  // const [messageApi, contextHolder] = message.useMessage()

  function handleCancel() {
    // 关闭弹窗
    props.setModalOpen(false)
    // 重置表单
    form.resetFields()
  }

  const onFinish = (values: any) => {
    console.log(values)
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
    const data: ISendEmail = {
      email: form.getFieldValue('email')
    }

    sendEmailCodeApi(data).then((res) => {
      if (res.status === 200) {
        message.success(res.data)
      } else {
        message.error(res.data)
      }
    })
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
        {props.clickType === 'login' ? (
          <div className="login">
            <div className="title">登录</div>
            <div className="input">
              <input type="text" placeholder="请输入用户名" />
            </div>
            <div className="input">
              <input type="password" placeholder="请输入密码" />
            </div>
            <div className="btn">
              <button>登录</button>
            </div>
          </div>
        ) : (
          <div className="register">
            <div className="title">邮箱注册</div>
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
                      <Button onClick={sendEmailCode}>获取验证码</Button>
                    </Col>
                  </Row>
                </Form.Item>

                <p className="text login-text cursor-pointer">去登录</p>

                <Form.Item>
                  <Button
                    type="primary"
                    disabled={disabledBtn}
                    htmlType="submit"
                    className="btn"
                  >
                    注册
                  </Button>
                </Form.Item>

                <p className="text">*若已有账号，则无需再次注册</p>
              </Form>
            </div>
          </div>
        )}
      </Modal>
    </LoginModalWrapper>
  )
})

export default LoginModal
