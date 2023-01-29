import styled from 'styled-components'

const LoginModalWrapper = styled.div`
  .loginModal {
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
    }

    .ant-input-clear-icon {
      display: none;
    }
  }
`

export default LoginModalWrapper
