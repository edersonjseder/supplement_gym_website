import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  bottom: 3vw;
  right: -95vw;
  display: inline-flex;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #ff1414;
  @media only screen and (max-width: 1280px) {
    position: fixed;
    width: 100%;
    bottom: 6vw;
    right: -98vw;
    display: inline-flex;
    height: 20px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: #ff1414;
  }
  @media only screen and (max-width: 1190px) {
    position: fixed;
    width: 100%;
    bottom: 7vw;
    right: -93vw;
    display: inline-flex;
    height: 20px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: #ff1414;
  }
`;

export const Square = styled.div`
  position: relative;
  width: 25vw;
  height: 24vw;
  background: rgba(35, 35, 35, 1);
  border-top: 0.8vw solid #ff1414;
  border-radius: 3px;
  overflow: hidden;
  background-image: ${(props) => `url("${props.image}")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 2048px) {
    position: relative;
    width: 30vw;
    height: 30vw;
    background: rgba(35, 35, 35, 1);
    border-top: 0.8vw solid #ff1414;
    border-radius: 3px;
    overflow: hidden;
    background-image: ${(props) => `url("${props.image}")`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media only screen and (max-width: 1600px) {
    position: relative;
    width: 30vw;
    height: 30vw;
    background: rgba(35, 35, 35, 1);
    border-top: 0.8vw solid #ff1414;
    border-radius: 3px;
    overflow: hidden;
    background-image: ${(props) => `url("${props.image}")`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media only screen and (max-width: 1440px) {
    position: relative;
    width: 30vw;
    height: 30vw;
    background: rgba(35, 35, 35, 1);
    border-top: 0.8vw solid #ff1414;
    border-radius: 3px;
    overflow: hidden;
    background-image: ${(props) => `url("${props.image}")`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media only screen and (max-width: 1280px) {
    position: relative;
    width: 29vw;
    height: 31vw;
    background: rgba(35, 35, 35, 1);
    border-top: 0.8vw solid #ff1414;
    border-radius: 3px;
    overflow: hidden;
    background-image: ${(props) => `url("${props.image}")`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media only screen and (max-width: 1190px) {
    position: relative;
    width: 30vw;
    height: 30vw;
    background: rgba(35, 35, 35, 1);
    border-top: 0.8vw solid #ff1414;
    border-radius: 3px;
    overflow: hidden;
    background-image: ${(props) => `url("${props.image}")`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media only screen and (max-width: 970px) {
    position: relative;
    width: 35vw;
    height: 35vw;
    background: rgba(35, 35, 35, 1);
    border-top: 0.8vw solid #ff1414;
    border-radius: 3px;
    overflow: hidden;
    background-image: ${(props) => `url("${props.image}")`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
`;

export const ProductionSection = styled.section`
  height: auto;
  display: grid;
  grid-template-rows: 15vw;
`;

export const DivAbout = styled.div`
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  background-color: #191a1f;
`;

export const DivShop = styled.div`
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  background-color: #181a1f;
`;

export const DivRecommended = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-left: 6vw;
`;

export const DivCategoryTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1vw;
`;

export const DivCategoryContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1vw;
`;

export const DivSliderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1vw;
`;

export const DivSliderTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1vw;
`;

export const DivSliderPriceDescription = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DivSliderButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DivProductContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DivProductField = styled.div`
  padding: 25px 0px;
`;

export const UlItems = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const DivDetailsContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DivDetailsButton = styled.div`
  width: 100%;
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: -2px;
`;

export const DivDetailsAbout = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
`;

export const DivTitleDetailsAbout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const DivAboutDescriptionContent = styled.div`
  background: #2b2e35;
  padding: 3vw;
`;

export const DivCart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0vw 1vw 0vw 5vw;
`;

export const DivTitleCart = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const DivCircleAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 15vw;
  border-right: 0.3vw solid ${(props) => `${props.colorRight}`};
  border-bottom: 0.3vw solid ${(props) => `${props.colorBottom}`};
  border-top: 0.3vw solid ${(props) => `${props.colorTop}`};
  border-left: 0.3vw solid ${(props) => `${props.colorLeft}`};
  border-radius: 50%;
`;
