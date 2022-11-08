import styled from 'styled-components'

const AhCenterWrapper = styled.div`
  .search {
    width: 290px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-radius: 21px;
    padding: 0 0 1px 15px;
    cursor: pointer;
    ${(props) => props.theme.shadow}

    border: 1px solid ${(props) => props.theme.color.border};

    .text {
      font-size: ${(props) => props.theme.font.size.medium};
      font-weight: ${(props) => props.theme.font.weight.bold};
    }

    .icon {
      width: 32px;
      height: 32px;
      border-radius: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      margin: 7px 7px 7px 0;
      background-color: ${(props) => props.theme.color.primary};
    }
  }
`

export default AhCenterWrapper
