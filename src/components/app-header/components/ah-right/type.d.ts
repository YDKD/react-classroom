type TBtnClickType = 'login' | 'register' | 'forget'

interface ILoginAndRegisterModalProps {
  modalOpen: boolean
  clickType: TBtnClickType
  setModalOpen: (open: boolean) => void
  setClickType?: (type: TBtnClickType) => void
}

export type { TBtnClickType, ILoginAndRegisterModalProps }
