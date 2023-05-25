import styled from 'styled-components'

const VideoWrapper = styled.div`
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;

    .video-list-item {
      width: ${(props) => 100 / props.theme.col + '%'};
      padding: 0 8px;
    }
  }

  .ant-empty-image {
    img {
      margin: 0 auto;
    }
  }
`

export default VideoWrapper
