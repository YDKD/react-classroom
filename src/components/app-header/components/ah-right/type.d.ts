type TBtnClickType = 'login' | 'register' | 'forget'

interface ILoginAndRegisterModalProps {
  modalOpen: boolean
  clickType: TBtnClickType
  setModalOpen: (open: boolean) => void
  setClickType?: (e: any, type: TBtnClickType) => void
}

export type { TBtnClickType, ILoginAndRegisterModalProps }
