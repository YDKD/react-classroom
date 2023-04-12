import styled from 'styled-components'

const DetailInformationWrapper = styled.div`
  margin-top: 48px !important;
  padding: 46px 0 42px;
  background: #f8f8f8;
  border-radius: 4px;
  display: table;
  width: 100%;
  display: flex;

  .item {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    .icon {
      margin-bottom: 8px;
    }

    .text {
      margin-left: 16px;
      .title {
        margin-bottom: 8px;
      }
    }
  }
`

export default DetailInformationWrapper
