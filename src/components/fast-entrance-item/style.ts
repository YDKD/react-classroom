import styled from 'styled-components'

const FastEntranceItemWrapper = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 156px;
    box-shadow: 0px 6px 16px rgb(0 0 0 / 12%);
    margin: 8px 0;
    padding: 16px;
    border-radius: 12px;
    text-decoration: none;
    cursor: pointer;

    .top {
      margin-bottom: 16px;
    }

    .bottom {
      .title {
        margin-bottom: 8px;
      }

      .sub-title {
        color: #717171;
      }
    }
  }
`

export default FastEntranceItemWrapper
