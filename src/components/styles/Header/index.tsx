import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;

  h1 {
    font-size: 1rem;
    font-weight: 1.5rem;
    text-align: center;
    text-overflow: nowrap;
    overflow: hidden;
    width: 50%;
  }

  svg {
    font-weight: 600;
    --tw-rotate: 180deg;
    transform: translate(0, 0) rotate(180deg) skewX(0) skewY(0) scaleX(1)
      scaleY(1);
  }
`;
