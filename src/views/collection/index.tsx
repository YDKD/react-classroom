import { getUserCollectionVideoApi } from '@/api/video'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import { Avatar, List, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { memo } from 'react'
import { IVideoListItem } from '../home/types'
import config from '@/config'

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
}))

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    <div className="item flex items-center">
      {React.createElement(icon)}
      <span className="text pl-2"> {text}</span>
    </div>
  </Space>
)

const Collection = memo(() => {
  const [videoData, setVideoData] = useState<IVideoListItem[]>()

  const queryVideoCollection = () => {
    getUserCollectionVideoApi().then((res) => {
      if (res.status === 200) {
        setVideoData(res.data)
      }
    })
  }

  useEffect(() => {
    queryVideoCollection()
  }, [])

  return (
    <div className="p-5">
      <List
        itemLayout="vertical"
        size="large"
        pagination={false}
        dataSource={videoData}
        footer={<div>用户收藏视频列表</div>}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text={item.collectionNum!.toString()}
                key="list-vertical-star-o"
              />
              // <IconText
              //   icon={LikeOutlined}
              //   text="156"
              //   key="list-vertical-like-o"
              // />,
              // <IconText
              //   icon={MessageOutlined}
              //   text="2"
              //   key="list-vertical-message"
              // />
            ]}
            extra={
              <img
                width={272}
                height={168}
                style={{
                  borderRadius: '10px',
                  objectFit: 'cover',
                  height: '168px'
                }}
                alt="logo"
                src={config.fileUploadUrl + item.thumbnail}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={config.fileUploadUrl + item.thumbnail} />}
              title={item.title}
            />
            {item.description}
          </List.Item>
        )}
      />
    </div>
  )
})

export default Collection
