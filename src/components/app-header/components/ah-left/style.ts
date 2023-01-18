import styled from 'styled-components'
import logoBg from '@/assets/img/logo.png'

const AhLeftWrapper = styled.div`
  flex: 1;

  .logo {
    width: 120px;
    height: 31px;
    display: flex;
    align-items: center;

    .title {
      color: #3388fb;
    }

    svg {
      cursor: pointer;
    }
  }
`

export default AhLeftWrapper
