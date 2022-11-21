import styled, { ThemedStyledProps } from 'styled-components'

interface Props {
  col: number
}

type TProps = ThemedStyledProps<Props, any>

const SectionRoomsWrapper = styled.div`
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;

    .list-item {
      width: ${(props: TProps) => 100 / props.col + '%'};
      padding: 0 8px;
    }
  }
`

export default SectionRoomsWrapper
