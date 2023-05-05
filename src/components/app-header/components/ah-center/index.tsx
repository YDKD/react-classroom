import IconSearch from '@/assets/svg/IconSearch'
import React, { memo, useState } from 'react'
import AhCenterWrapper from './style'
import { AutoComplete, Input, message } from 'antd'
import useThrottle from '@/hooks/tools/useThrottle'
import useDebounce from '@/hooks/tools/useDebounce'
import { ISearchVideo } from '@/api/video/type'
import { searchVideoByKeysApi } from '@/api/video'
import { IVideoListItem } from '@/views/home/types'
import useIsLogin from '@/hooks/tools/useIsLogin'
import { router } from '@/router'
import config from '@/config'
import { useNavigate } from 'react-router-dom'

interface ISearchItem extends IVideoListItem {
  value: string
  label: string
}

const AhCenter = memo(() => {
  const [showSearch, setShowSearch] = useState<boolean>(true)
  const [options, setOptions] = useState<ISearchItem[]>([])
  const [value, setValue] = useState<string>('')
  const navigate = useNavigate()

  const handleClick = () => {
    setShowSearch(false)
  }

  const handleSearch = useDebounce((value: string) => {
    const params: ISearchVideo = {
      keyword: value
    }
    setValue(value)

    searchVideoByKeysApi(params).then((res) => {
      console.log('res', res)
      if (res.status === 200) {
        setOptions([])

        const options = res.data.map((item: IVideoListItem) => {
          return {
            ...item,
            value: item.title,
            label: item.title
          }
        })
        setOptions(options)
      }
    })
  }, 300)

  const onSelect = (value: string) => {
    const currentItem = options.find((item) => item.value === value)

    const isLogin = useIsLogin()

    if (isLogin) {
      router.navigate(`${config.adminPrefix}/video/detail`, {
        formMethod: 'get',
        state: {
          videoId: currentItem?.id
        }
      })
    } else {
      // 提示用户进行登录
      message.warning('请先登录')
    }

    setOptions([])
    setValue('')
  }

  const onSearch = () => {
    navigate('/web/search')
  }

  return (
    <AhCenterWrapper>
      <div className="search" onClick={handleClick}>
        {showSearch ? (
          <div className="search-text">搜索</div>
        ) : (
          <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{ width: '100%', border: 'none' }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
          >
            <Input
              placeholder="请输入课程名称"
              style={{
                border: 'none'
              }}
            />
          </AutoComplete>
        )}
        <div className="icon" onClick={onSearch}>
          <IconSearch />
        </div>
      </div>
    </AhCenterWrapper>
  )
})

export default AhCenter
