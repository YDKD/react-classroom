import styled from 'styled-components'

const LoginModalWrapper = styled.div`
  .title {
    text-align: center;
    height: 78px;
    line-height: 78px;
    font-size: 18px;
    font-weight: 500;
    color: #333;
  }

  .text {
    color: #666;
  }

  .login-text {
    text-align: right;
  }
  .btn {
    width: 100%;
    background-color: #008489;
    color: #fff;
    border-color: transparent;
  }

  .fast-entrance {
    color: #666;
    font-size: 12px;

    .separator {
      padding: 0 8px;
    }
  }

  .ant-input-clear-icon {
    display: none;
  }
`

export default LoginModalWrapper
