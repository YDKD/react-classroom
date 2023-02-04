import { memo } from 'react'
import RegisterModal from './c-cpns/RegisterModal'
import LoginModal from './c-cpns/LoginModal'
import LoginModalWrapper from './styled'

interface IProps {
  modalOpen: boolean
  clickType: 'login' | 'register'
  setModalOpen: (open: boolean) => void
}

const LoginAndRegisterModal = memo((props: IProps) => {
  return (
    <LoginModalWrapper>
      {props.clickType === 'login' ? (
        <LoginModal {...props}></LoginModal>
      ) : (
        <RegisterModal {...props}></RegisterModal>
      )}
    </LoginModalWrapper>
  )
})

export default LoginAndRegisterModal
