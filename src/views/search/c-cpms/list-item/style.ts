import styled from 'styled-components'

const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgba(95, 101, 105, 0) 0px 12px 20px 0px;
  height: 54px;
  background: transparent;
  margin-bottom: 25px;
  .title {
    width: 3.5em;
    color: #07111b;
    line-height: 32px;
    font-weight: 700;
    margin-right: 6px;
  }

  .list {
    display: flex;
    align-items: center;
    .item {
      line-height: 16px;
      padding: 8px;
      border-radius: 6px;
      margin: 0 12px;
      cursor: pointer;
    }

    .active {
      background-color: rgba(233, 142, 70, 0.1);
      color: #e98e46;
    }
  }
`

export default ListItemWrapper
