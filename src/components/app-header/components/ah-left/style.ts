import styled from 'styled-components'

const AhLeftWrapper = styled.div`
  flex: 1;

  .logo {
    color: ${(props) => props.theme.color.primary};

    svg {
      cursor: pointer;
    }
  }
`

export default AhLeftWrapper
