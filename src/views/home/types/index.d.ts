interface IGoodPriceItem {
  id: number
  picture_url: string
  name: string
  price: number
  price_format: string
  star_rating_color: string
  reviews_count: number
  lat: number
  lng: number
  image_url: string
  star_rating: number
  star_rating_color: string
  verify_info: {
    messages: string[]
    text_color: string
  }
  bottom_info?: {
    content?: string
    content_color?: string
    font_size?: number | string
    visibility?: string
  }
}

interface IGoodPrice {
  _id: string
  type: string
  title: string
  list: Array<IGoodPriceItem>
}

interface IUserInfo {
  userId: string
  email: string
  phone: string
  avatar: string
  create_time: string
  birth: string
  followed: string
  nick: string
}

export { IGoodPrice, IGoodPriceItem, IUserInfo }
