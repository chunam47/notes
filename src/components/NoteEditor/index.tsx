import Header from '@components/Header';
import { CalendarWrapper } from '@components/styles/NotesList';
import Tiptap from '@components/Tiptap';
import './index.scss';
import iconCalendar from '@assets/calendar.png';
import Dante3Editor from 'dante3';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@redux';
import { useEffect, useMemo, useState } from 'react';
import { createOrUpdateNote, Note } from '@redux/notes';
import { format } from 'date-fns';

const NoteEditor = () => {
  const params = useParams();
  const { folder: folderId, id } = params;
  const defaultNote: Note = useMemo(
    () => ({
      id,
      title: 'Untitled',
      content: '',
      created_at: format(Date.now(), 'dd/LL/Y'),
    }),
    [],
  );
  const folders = useAppSelector((state) => state.noteReducer);
  const folder = folders?.find((noteFolder) => noteFolder.id === folderId);
  const foundNote = folder?.notes?.find((note) => note.id === id);
  const [note, setNote] = useState<Note>(foundNote || defaultNote);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(note);
  }, [note]);

  const handleSaveNote = () => {
    // validate title and content both must have value
    if (!note.title || !note.content) return;

    dispatch(
      createOrUpdateNote({
        folderId,
        note,
      }),
    );
    navigate(`/folder/${folderId}`);
  };

  return (
    <>
      <div className="note-editor">
        <Header
          title={note?.title}
          rightContent={
            <div onClick={handleSaveNote} className="font-semibold text-[#004dff]">
              Done
            </div>
          }
        />
        <div className="py-3">
          <CalendarWrapper>
            <img src={iconCalendar} alt="iconCalendar" />
            <span>{note?.created_at}</span>
          </CalendarWrapper>
        </div>
        {/* <Tiptap /> */}

        <input
          type="text"
          defaultValue={note.title}
          className="w-full bg-transparent text-base text-black font-semibold focus:outline-none"
          onChange={(e) => setNote((prev) => ({ ...prev, title: e.target.value }))}
        />
        <div className="editor-wrapper">
          <Dante3Editor
            content={note?.content}
            onUpdate={(editor) =>
              setNote((prev) => ({ ...prev, content: editor.getHTML() }))
            }
          />
        </div>
      </div>
    </>
  );
};

export default NoteEditor;
