import styled from 'styled-components'
import type { ThemeProps } from 'styled-components'

interface IProps {
  verifyColor: string
}

const RoomItemWrapper = styled.div`
  .inner {
    width: 100%;
    cursor: pointer;
    .cover {
      width: 100%;
      padding: 66.66% 8px 0;
      position: relative;
      margin-bottom: 8px;

      img {
        position: absolute;
        border-radius: 3px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .title {
      color: ${(props: ThemeProps<IProps>) => props.theme.verifyColor};
      font-size: 12px;
    }

    .desc {
      font-weight: 800;
    }

    .price {
      font-size: 14px;
    }
  }
`

export default RoomItemWrapper
