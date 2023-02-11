import Header from "@components/Header";
import EditorJs from "@natterstefan/react-editor-js";
import { CalendarWrapper } from "@components/styles/NotesList";
import Tiptap from "@components/Tiptap";
import "./index.scss";
import iconCalendar from "@assets/calendar.png";
import Dante3Editor from "dante3";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createOrUpdateNote, Note } from "@redux/notes";
import { format } from "date-fns";
import { EDITOR_JS_TOOLS } from "./constants";

const NoteEditor = () => {
  const params = useParams();
  const { folder: folderId, id } = params;
  const defaultNote: Note = useMemo(
    () => ({
      id,
      title: "Untitled",
      content: {
        blocks: "",
      },
      created_at: format(Date.now(), "dd/LL/Y"),
    }),
    []
  );
  const folders = useAppSelector((state) => state.noteReducer);
  const folder = folders?.find((noteFolder) => noteFolder.id === folderId);
  const foundNote = folder?.notes?.find((note) => note.id === id);
  const [note, setNote] = useState<Note>(foundNote || defaultNote);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      createOrUpdateNote({
        folderId,
        note,
      })
    );
  });

  const instanceRef = React.useRef(null);

  const handleSaveNote = async () => {
    // validate title and content both must have value
    if (!note.title || !note.content) return;

    const savedData = await instanceRef.current.save();
    setNote((prev) => ({ ...prev, content: savedData }));
    // navigate(`/folder/${folderId}`);
  };

  return (
    <>
      <div className="note-editor">
        <Header
          title={note?.title}
          rightContent={
            <div
              onClick={handleSaveNote}
              className="font-semibold text-[#004dff] cursor-pointer"
            >
              Save
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
          onChange={(e) =>
            setNote((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <div className="editor-wrapper">
          <EditorJs
            defaultBlock=""
            editorInstance={(instance) => (instanceRef.current = instance)}
            tools={EDITOR_JS_TOOLS}
            data={note.content}
            i18n={{
              messages: {},
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NoteEditor;
