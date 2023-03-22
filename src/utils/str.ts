import config from '@/config'

/**
 * 拼接url
 * @param url 地址
 * @returns
 */
const montageUrl = (url: string) => {
  if (url.startsWith('http')) {
    return url
  }
  return `${config.fileUploadUrl}${url}`
}

export { montageUrl }
