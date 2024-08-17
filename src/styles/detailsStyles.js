import styled from "styled-components";

export const SectionDetails = styled.section`
  --bs-gutter-x: 1rem;
  --bs-gutter-y: 0;
  max-width: 1570px;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
`;

export const SectionDescriptionDetails = styled.section`
  --bs-gutter-x: 1rem;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  max-width: 1570px;
  width: 100%;
  margin-top: 1vw;
  margin-bottom: 1vw;
  margin-right: auto;
  margin-left: auto;
`;

export const DivRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1vw;
  background-color: #181a1f;
`;

export const DivColumn = styled.div`
  flex: 0 0 auto;
  width: 50%;
`;

export const DivLine = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
  gap: 10px;
`;

export const DivLine2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
  gap: 10px;
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DivSidebarButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 1.5vw;
  width: 95%;
`;

export const DivSidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 80vh;
  gap: 5px;
`;

export const DivSidebarEmptyItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  position: relative;
  top: 40%;
  gap: 5px;
`;
