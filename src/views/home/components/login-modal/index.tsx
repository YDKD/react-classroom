import { Modal } from 'antd'
import { memo } from 'react'

interface IProps {
  modalOpen: boolean
  modalTitle: string
  setModalOpen: (open: boolean) => void
}

const LoginModal = memo((props: IProps) => {
  function handleCancel() {
    props.setModalOpen(false)
  }

  return (
    <div className="login-modal">
      <Modal
        title={props.modalTitle}
        open={props.modalOpen}
        centered
        footer={null}
        onCancel={handleCancel}
      >
        <div className="login-modal-content">
          <div className="login-modal-content-item">
            <div className="login-modal-content-item-left">
              <span>账号</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
})

export default LoginModal
