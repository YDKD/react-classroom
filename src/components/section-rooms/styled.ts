import styled, { ThemedStyledProps } from 'styled-components'

const SectionRoomsWrapper = styled.div`
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;

    .list-item {
      width: ${(props) => 100 / props.theme.col + '%'};
      padding: 0 8px;
    }
  }
`

export default SectionRoomsWrapper
