import { memo } from 'react'
import RegisterOrForgotModal from './c-cpns/RegisterOrForgotModal'
import LoginModal from './c-cpns/LoginModal'
import LoginModalWrapper from './styled'
import { ILoginAndRegisterModalProps } from '@/components/app-header/components/ah-right/type'

const LoginAndRegisterModal = memo((props: ILoginAndRegisterModalProps) => {
  let element

  switch (props.clickType) {
    case 'register':
      element = <RegisterOrForgotModal {...props} />
      break
    case 'login':
      element = <LoginModal {...props} />
      break
    case 'forget':
      element = <RegisterOrForgotModal {...props} />
      break
    default:
      break
  }

  return <LoginModalWrapper>{element}</LoginModalWrapper>
})

export default LoginAndRegisterModal
