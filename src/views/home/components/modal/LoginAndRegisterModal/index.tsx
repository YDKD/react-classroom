import { memo } from 'react'
import RegisterModal from './comps/RegisterModal'
import LoginModal from './comps/LoginModal'
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
