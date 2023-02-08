import styled from 'styled-components'

const AppFooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #ebebeb;
  background-color: #282c2f;
  color: #a8a8a8;

  .wrapper {
    width: 1080px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 48px 24px;

    .title {
      font-size: 24px;
    }
  }

  .statement {
    margin-top: 30px;
    border-top: 1px solid #837b7b;
    padding: 20px;
    color: #767676;
    text-align: center;
  }

  .beian {
    color: #767676;
    a {
      &:hover {
        color: #fff;
      }
    }
  }
`

export default AppFooterWrapper
