import styled from "styled-components";

export const SectionItemsColumnCheckout = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 470px;
  width: 100%;
  gap: 1vw;
`;

export const SectionProductCheckout = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 470px;
  width: 100%;
  gap: 1vw;
`;

export const SectionDescriptionProductCheckout = styled.section`
  --bs-gutter-x: 1rem;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  max-width: 1570px;
  width: 100%;
  margin-top: 1vw;
  margin-bottom: 1vw;
  margin-right: auto;
  margin-left: auto;
`;

export const SectionProductItemsCart = styled.section`
  --bs-gutter-x: 1rem;
  --bs-gutter-y: 0;
  max-width: 1570px;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  margin-top: 10vw;
  margin-right: auto;
  margin-left: auto;
`;

export const SectionSuggestedProductItemsCart = styled.section`
  max-width: 1570px;
  width: 100%;
  margin-top: 5vw;
  margin-right: 3vw;
  margin-left: 3vw;
`;

export const SectionDescriptionProductItemsCart = styled.section`
  --bs-gutter-x: 1rem;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  max-width: 1570px;
  width: 100%;
  margin-top: 1vw;
  margin-bottom: 1vw;
  margin-right: auto;
  margin-left: auto;
`;

export const DivCartRow = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1vw;
`;

export const DivCheckoutRowButton = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1vw;
`;

export const DivCartItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 20vw;
`;

export const DivCartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DivCartItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 auto;
  width: 65%;
  padding: 0.5vw;
  border-radius: 3px;
  border: 1px solid #fff;
`;

export const DivCheckoutColumn = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 auto;
  width: 25vw;
  padding: 0vw 2.5vw 0vw 2.5vw;
`;

export const DivCheckoutDataColumn = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 auto;
  width: 25vw;
  padding: 0.5vw 2.5vw 2.5vw 2.5vw;
  border-radius: 3px;
  border: 1px solid #fff;
  background: #a3a3a3;
`;

export const DivColTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const DivRowTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.7vw;
`;

export const DivInputTesteRow = styled.div`
  height: 50px;
  position: relative;
  width: 100%;
`;

export const DivInputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const DivInputNameRow = styled.div`
  display: flex;
  gap: 3px;
`;

export const DivCheckoutPriceColumn = styled.div`
  flex: 0 0 auto;
  width: 25vw;
  height: auto;
  padding: 2vw 1vw 2vw 1vw;
  border-radius: 3px;
  border: 1px solid #fff;
  background: #a3a3a3;
`;

export const DivCartItemsPriceColumn = styled.div`
  flex: 0 0 auto;
  width: 35%;
`;

export const UlSuggestedProducts = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2vw;
`;

export const DivSuggestedProductsField = styled.div`
  padding: 25px 0px;
`;

export const DivRowButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1vw;
  padding: 0 0 2vw 0;
`;

export const DivRowContinueButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1vw;
`;

export const DivRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1vw;
`;

export const DivLabelsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5vw;
`;

export const DivCheckoutItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  border-radius: 3px;
  border: 1px solid #fff;
  margin: 0vw 0vw 1vw 0vw;
`;

export const DivCheckoutItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 15vw;
`;

export const DivCheckoutIconRow = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;

export const DivCheckoutProductsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #8a6b6b;
  border: 2px solid rgba(255, 2, 2, 0.336);
  white-space: nowrap;
  transition: 0.4s ease-in-out 0s;
  &::before {
    background: rgba(255, 2, 2, 0.336);
    height: 20px;
    width: 20px;
    transform: scale(5);
    opacity: 0;
    visibility: hidden;
    transition: 0.4s ease-in-out 0s;
  }
  &::after {
    height: 19px;
    width: 19px;
    border: 2px solid rgba(255, 2, 2, 0.336);
  }
`;

export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    &::after {
      content: "";
      position: absolute;
      display: none;
      color: #eee;
      width: 20px;
      height: 20px;
      margin: 4px;
      border: 2px solid #ff1414;
      border-radius: 50%;
      top: -5px;
      left: -5px;
    }
    &::before {
      content: "";
      position: absolute;
      border-radius: 50%;
      height: 20px;
      width: 20px;
      margin: 4px;
      border: 2px solid #ff1414;
      border-radius: 50%;
      background: rgba(255, 2, 2, 0.336);
      top: -8px;
      left: -8px;
    }
  }
  &:checked ~ ${RadioButtonLabel} {
    border-color: #ff1414;
    background: #ff1414;
    width: 20px;
    height: 20px;
  }
  &:checked ~ ${RadioButtonLabel}::before {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 45px;
  position: relative;
  border: 2px solid rgba(255, 2, 2, 0.336);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px 10px;
  background: #8a6b6b;
  color: #eee;
  font-size: 16px;
  font-weight: 400;
  min-width: 250px;
  transition: 0.4s ease-in-out 0s;
`;
