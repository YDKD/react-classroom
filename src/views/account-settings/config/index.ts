import { IFastEntranceItem } from '../type'

const settingConfigList: IFastEntranceItem[] = [
  {
    id: 1,
    link: '/profile',
    icon: 'icon-profile',
    title: '个人信息',
    subTitle: '查看个人信息和联系方式'
  },
  {
    id: 2,
    link: '/notice',
    icon: 'icon-notice',
    title: '通知',
    subTitle: '查看通知和消息'
  },
  {
    id: 3,
    link: '/collection',
    icon: 'icon-collection',
    title: '我的收藏',
    subTitle: '查看收藏内容'
  }
]

export { settingConfigList }
