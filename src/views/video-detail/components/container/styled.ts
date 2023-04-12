import styled from 'styled-components'

const ContainerWrapper = styled.div`
  .desc {
    display: flex;
    .left {
      width: 50%;
      float: left;
      padding-right: 20px;

      .title {
        font-size: 34px;
        color: #333;
        line-height: 1.4;
      }

      .text {
        line-height: 23px;
        margin-top: 24px;
        font-size: 14px;
        color: #666;
      }
    }

    .right {
      width: 100%;
      .cover {
        position: relative;
        box-sizing: border-box;
        padding: 56.66% 8px 0;
        border-radius: 3px;
        overflow: hidden;

        .video {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`

export default ContainerWrapper
