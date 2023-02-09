import react, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import FoldersList from './components/FoldersList';
import NoteEditor from './components/NoteEditor';
import NotesList from './components/NotesList';
import { data } from './constants';

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 28px 20px;
`;

function App() {
  // useEffect(() => {
  //   localStorage.setItem('notes', JSON.stringify(data));
  // }, [])

  return (
    <Root>
      <Routes>
        <Route path="/" element={<FoldersList />} />
        <Route path="/folder/:id" element={<NotesList />}></Route>
        <Route path={`/note/:folder/:id`} element={<NoteEditor />} />
      </Routes>
    </Root>
  );
}

export default App;
