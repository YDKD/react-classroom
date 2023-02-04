interface ISendEmail {
  email: string
}

interface IRegisterData {
  phone?: string
  email?: string
  password: string
  emailCode?: string
}

interface IUserLogin {
  phone?: string
  email?: string
  password: string
}

export type { ISendEmail, IRegisterData, IUserLogin }
