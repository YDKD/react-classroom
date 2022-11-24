import styled from 'styled-components'

export const SectionTabsWrapper = styled.div`
  .tab-list {
    display: flex;
    margin-bottom: 24px;
    .tab-list-item {
      box-sizing: border-box;
      flex-basis: 120px;
      flex-shrink: 0;
      padding: 14px 16px;
      margin-right: 16px;
      border-radius: 3px;
      font-size: 17px;
      text-align: center;
      border: 0.5px solid #d8d8d8;
      white-space: nowrap;
      cursor: pointer;

      &.active {
        color: #fff;
        background-color: ${(props) => props.theme.color.secondary};
      }
    }
  }
`
