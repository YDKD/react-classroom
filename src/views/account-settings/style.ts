import styled from 'styled-components'

const AccountSettingWrapper = styled.div`
  .wrapper {
    .setting-container {
      .item {
        width: calc((100% - 16px) / 3);

        margin-right: 8px;

        &:last-child {
          margin-right: 0px;
        }

        &:hover {
          transform: translate3d(0, -2px, 0);
          transition: all 0.2s linear;
        }
      }
    }
  }
`

export default AccountSettingWrapper
