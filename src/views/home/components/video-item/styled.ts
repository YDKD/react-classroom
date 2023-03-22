import styled from 'styled-components'

const VideoItemWrapper = styled.div`
  transition: margin-top 0.2s, padding-bottom 0.2s;
  .inner {
    width: 100%;
    cursor: pointer;
    padding-bottom: 8px;
    border: 1px solid #ebebeb;

    border-radius: 4px;
    transition: box-shadow 1s, -webkit-box-shadow 1s;

    .cover {
      width: 100%;
      padding: 66.66% 8px 0;
      position: relative;
      margin-bottom: 8px;

      img {
        position: absolute;
        border-radius: 3px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .content {
      padding: 12px 16px;
      .info {
        display: flex;
        justify-content: space-between;
        .title {
          font-size: 16px;
          margin-bottom: 8px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
          font-weight: 500;
        }
      }

      .desc {
        color: #666;
        margin-bottom: 4px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  &:hover {
    padding-bottom: 8px;
    margin-top: -8px;

    .inner {
      -webkit-box-shadow: 0 0 9px #ddd;
      box-shadow: 0 0 9px #ddd;
      margin-bottom: 0;
    }
  }
`

export default VideoItemWrapper
