import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../constants';
import {
  FolderWrapper,
  RootWrapper,
  SumNotesWrapper,
  TitleWrapper,
} from '../styles/FoldersList';
import NewFolder from './NewFolder';
import iconFolder from '../../assets/folder.png';
import { useSelector } from 'react-redux';
import { RootState } from '@redux';

const FolderList = ({ handleClickFolder }: any) => {
  const [folder, setFolder] = useState(data);
  const folders = useSelector((state: RootState) => state.noteReducer);

  return (
    <>
      <RootWrapper>
        <TitleWrapper>Notes</TitleWrapper>
        {folders?.map((item, index) => (
          <Link to={`folder/${item.id}`} key={index}>
            <FolderWrapper>
              <img src={iconFolder} alt="iconFolder" />
              <p>{item.title}</p>
            </FolderWrapper>
            <SumNotesWrapper>
              {item.notes ? <p>{item.notes?.length}</p> : <p>0</p>}
            </SumNotesWrapper>
          </Link>
        ))}
      </RootWrapper>
      <NewFolder />
    </>
  );
};

export default FolderList;
