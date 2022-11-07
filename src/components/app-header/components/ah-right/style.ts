import styled from 'styled-components'

const AhRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .btns,
  .profile {
    display: flex;
    align-items: center;
  }

  .btns {
    div {
      display: inline-block;
      cursor: pointer;
      width: 52px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      transition: color 2500ms ease;

      span {
        color: #000;
        z-index: 1;
      }

      &:hover {
        color: #000;
      }

      &:hover::before {
        background-color: #f7f7f7;
      }

      &::before {
        bottom: 0;
        content: '';
        position: absolute;
        top: 0;
        z-index: 0;
        border-radius: 22px;
        left: -3px;
        right: -3px;
      }

      &.icon {
        width: 42px;
        margin-right: 5px;

        &::before {
          border-radius: 50%;
        }
      }
    }
  }

  .profile {
    border: 1px solid ${(props) => props.theme.color.border};
    cursor: pointer;
    padding: 5px 5px 5px 12px;
    border-radius: 21px;
    color: #717171;

    .right {
      margin-left: 12px;
    }
  }
`

export default AhRightWrapper
