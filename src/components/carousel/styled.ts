import styled from 'styled-components'

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  .leftButton,
  .rightButton {
    border: none;
    height: 36px;
    width: 36px;
    transition: 1s;
    border-radius: 50%;
    background-color: #001529;
    color: #ff0000;
    position: absolute;
    top: 40%;
    z-index: 10;
    transform: translateY(-50%);
    opacity: 0.3;
  }

  .leftButton:hover,
  .rightButton:hover {
    opacity: 1;
  }

  .img-item {
    height: 529px;

    img {
      width: 100%;
    }
  }
`
export default CarouselWrapper
