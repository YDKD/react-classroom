import { Button, Form, Input, Modal } from 'antd'
import { memo } from 'react'
import LoginModalWrapper from './LoginModalWrapper'

interface IProps {
  modalOpen: boolean
  clickType: 'login' | 'register'
  setModalOpen: (open: boolean) => void
}

const LoginModal = memo((props: IProps) => {
  const [form] = Form.useForm()

  function handleCancel() {
    // 关闭弹窗
    props.setModalOpen(false)
    // 重置表单
    form.resetFields()
  }

  const onFinish = () => {
    // 处理登录功能
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
