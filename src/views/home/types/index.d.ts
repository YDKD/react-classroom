interface IGoodPriceItem {
  id: number
  picture_url: string
  name: string
  price: number
  price_format: string
  star_rating_color: string
  review_count: number
  lat: number
  lng: number
  image_url: string
  verify_info: {
    messages: string[]
    text_color: string
  }
}

interface IGoodPrice {
  _id: string
  type: string
  title: string
  list: Array<IGoodPriceItem>
}

export { IGoodPrice, IGoodPriceItem }
