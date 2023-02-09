import styled from 'styled-components';

export const NewFolderForm = styled.form`
  position: relative;
  z-index: 110;
  background-color: #4286f4;
  padding: 0.4em 0 0.4em 1em;
`;

export const NewFolderInput = styled.input.attrs({
  autoFocus: true,
  type: 'text',
  'aria-label': 'Edit folder name',
})`
  outline: none;
  width: 99%;
  appearance: none;
  font: 500 16px sans-serif;
  border: none;
  padding: 0;
`;

export const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
`;

export const NewFolderButton = styled.button.attrs({
  'aria-label': 'Add New Folder',
})`
  position: absolute;
  bottom: 0;
  border: none;
  font-size: 16px;
  background-color: #ecebeb;
  display: flex;
  border-radius: 8px 8px 0 0;
  align-items: center;
  padding: 0.5em 0.5em;
  color: #000;

  :focus {
    outline: none;
  }
`;
export const ButtonText = styled.span`
  padding-left: 0.3em;
`;
