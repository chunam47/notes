import styled from 'styled-components';

export const RootNotesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LinkWrapper = styled.div<{
  tagColor: string;
}>`
  a {
    position: relative;
    background: #ffffff;
    box-shadow: 0px 0px 32px rgba(0, 77, 255, 0.03);
    border-radius: 16px;
    margin-bottom: 0.75rem;
    display: flex;
    flex-direction: column;
    padding: 12px 30px;

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

  a::before {
    content: '';
    background: ${({ tagColor }) => tagColor};
    border-radius: 0px 2px 2px 0px;
    width: 20px;
    height: 16px;
    position: absolute;
    left: 0%;
    right: 94.03%;
    top: 24.37%;
    bottom: 56.58%;
  }
`;

export const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.375rem;
  }
`;

export const AddNoteButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: #004dff;
  padding: 0.5rem 0.5rem;
  border-radius: 50%;

  svg {
    display: block;
  }
`;
