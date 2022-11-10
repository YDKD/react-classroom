import styled from 'styled-components'

const HomeWrapper = styled.div`
  .content {
    width: ${(props) => props.theme.containerWitdh};
    margin: 0 auto;
    .contetn-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -8px;

      .content-item {
        width: 25%;
        padding: 0 8px;
      }
    }
  }
`

export default HomeWrapper
