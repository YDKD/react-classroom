interface ISendEmail {
  email: string
}

interface IRegisterData {
  phone?: string
  email?: string
  password: string
  emailCode?: string
}

export type { ISendEmail, IRegisterData }
