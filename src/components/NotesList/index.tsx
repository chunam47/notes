import {
  AddNoteButton,
  CalendarWrapper,
  LinkWrapper,
  RootNotesListWrapper,
} from '../styles/NotesList';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import iconCalendar from '../../assets/calendar.png';
import { TitleWrapper } from '../styles';
import React, { useEffect, useMemo, useState } from 'react';
import Filter from '@components/Filter';
import { getRandomHexColor } from '@utils/color';
import Header from '@components/Header';
import { useSelector } from 'react-redux';
import { RootState } from '@redux';
import OutlinePlus from '@assets/icons/OutlinePlus';
import ChevronRight from '@assets/icons/ChevronRight';

const NotesList = () => {
  const [filter, setFilter] = useState('');
  const params = useParams();
  const folders = useSelector((state: RootState) => state.noteReducer);
  const folder = folders.find((folder) => folder.id === params.id);
  const notes = folder.notes;
  const filteredData = useMemo(() => {
    if (!filter) return notes;
    return notes.filter((note) => {
      return note.title.toLowerCase().includes(filter.toLowerCase());
    });
  }, [filter, notes]);
  const navigate = useNavigate();

  return (
    <>
      <RootNotesListWrapper>
        <Header
          title={folder?.title}
          leftContent={
            <div onClick={() => navigate('/')}>
              <ChevronRight
                className="font-semibold rotate-180"
                width="20"
                height="20"
              />
            </div>
          }></Header>
        <Filter setTextFilter={setFilter}></Filter>
        {notes?.length > 0 ? (
          <>
            {filteredData.map((item, index) => (
              <LinkWrapper tagColor={getRandomHexColor()} key={index}>
                <Link to={`/note/${folder?.id}/${item.id}`}>
                  <>
                    <p>{item.title}</p>
                    <CalendarWrapper>
                      <img src={iconCalendar} alt="iconCalendar" />
                      <span>{item.created_at}</span>
                    </CalendarWrapper>
                  </>
                </Link>
              </LinkWrapper>
            ))}
          </>
        ) : (
          <p className="text-black text-center">No data</p>
        )}
        <AddNoteButton
          onClick={() => navigate(`/note/${folder?.id}/${crypto.randomUUID()}`)}>
          <OutlinePlus />
        </AddNoteButton>
      </RootNotesListWrapper>
    </>
  );
};

export default NotesList;
