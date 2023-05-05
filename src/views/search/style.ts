import styled from 'styled-components'

const SearchWrapper = styled.div`
  .header {
    background-color: #f5f7fa;
    background-image: url(//www.imooc.com/static/images/top_bg.png?v=1);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    padding: 16px 20px;
    .header-wrap {
      height: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      padding-top: 8px;
      .banner {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;

        .title {
          img {
            width: 126px;
            height: 46px;
          }
        }

        .text {
          color: #938e8e;
        }
      }
    }
  }

  .w143 {
    width: 1152px;
    margin: 0 auto;
  }

  .video-list {
    margin-top: 20px;
  }
`

export default SearchWrapper
