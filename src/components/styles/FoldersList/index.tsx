import styled from "styled-components";

export const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    position: relative;
    background: #ffffff;
    box-shadow: 0px 0px 32px rgba(0, 77, 255, 0.03);
    border-radius: 16px;
    margin-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
    padding: 12px;

    p {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      text-transform: capitalize;
      color: #04004d;
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      color: #667386;
    }
  }
`;

export const TitleWrapper = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #04004d;
  margin-bottom: 12px;
`;

export const FolderWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 20px;
    margin-right: 0.75rem;
  }
`;

export const SumNotesWrapper = styled.div`
  p {
    padding-right: 12px;
  }
  p:before {
    content: "\0355";
    border-radius: 0px 2px 2px 0px;
    position: absolute;
    right: 12px;
    top: -6px;
    font-size: 40px;
    color: #ccc;
  }
`;
