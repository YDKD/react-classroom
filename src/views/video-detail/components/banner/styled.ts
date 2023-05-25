import styled from 'styled-components'

const BannerWrapper = styled.div`
  height: 366px;
  width: 100%;
  position: relative;
  z-index: 99;
  min-height: 160px;
  background: url(https://storagecdn.xuetangx.com/public_assets/xuetangx/xuetangX2018/course_new.png)
    no-repeat 50%;
  background-size: cover;

  .meng {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;

    .inner {
      padding: 55px 16px 0;
      height: 100%;
      position: relative;
      z-index: 2;
      max-width: 1350px;
      margin: auto;
      color: #fff;

      p {
        max-width: 670px;
        overflow: hidden;
        line-height: 1.4;
      }

      .desc {
        margin-top: 12px;
        font-size: 14px;
      }

      .detail {
        position: absolute;
        bottom: 20%;
        font-size: 16px;
        .tag {
          margin: 16px 0;
        }
      }

      .join-btn {
        position: absolute;
        right: 120px;
        top: 265px;
        background: #fcfcfc;
        text-align: center;
        padding: 13px 0;
        width: 240px;
        border-radius: 4px;
        cursor: pointer;
        color: #333;
      }

      .joined {
        background-color: #ccc;
        color: #fcfcfc;
      }

      .challenge-btn {
        position: absolute;
        right: 10px;
        top: 265px;
        border-radius: 4px;
        background-color: #1677ff;
        color: #fff;
        padding: 13px 20px;
        cursor: pointer;
      }
    }
  }
`

export default BannerWrapper
