import {
  Action,
  createSlice,
  Dispatch,
  MiddlewareAPI,
  PayloadAction,
} from "@reduxjs/toolkit";

export type Note = {
  id: string;
  created_at: string;
  content: {
    time?: number;
    blocks: any;
    version?: string;
  };
  title: string;
};

export type Folder = {
  id: string;
  title: string;
  notes: Note[];
};

const getSavedDataFromLocal = () => {
  const notes: Folder[] = JSON.parse(localStorage.getItem("notes"));
  return notes || [];
};

const initState: Folder[] = getSavedDataFromLocal();

const noteSlice = createSlice({
  name: "notes",
  initialState: initState,
  reducers: {
    createFolder: (state, action: PayloadAction<Folder>) => {
      console.log(action);
      return [action.payload, ...state];
    },
    createOrUpdateNote: (
      state,
      action: PayloadAction<{ folderId: string; note: Note }>
    ) => {
      const index = state.findIndex(
        (folder) => folder.id === action.payload.folderId
      );
      const potentialNote = action.payload.note;

      const noteIndex = state[index].notes.findIndex(
        (note) => note.id === potentialNote.id
      );
      if (noteIndex >= 0) {
        state[index].notes[noteIndex] = potentialNote;
      } else {
        state[index].notes.unshift(potentialNote);
      }
      return state;
    },
  },
});

export const noteAction = noteSlice.actions;
export const { createFolder, createOrUpdateNote } = noteAction;
export default noteSlice.reducer;

export const noteMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    const nextAction = next(action);
    const actionChangeOnlyFolder = noteAction.createFolder.match(action);
    if (actionChangeOnlyFolder) {
      const notes = store.getState().noteReducer;
      localStorage.setItem("notes", JSON.stringify(notes));
    }

    if (noteAction.createOrUpdateNote.match(action)) {
      console.log("save new note");
      const notes = store.getState().noteReducer;
      localStorage.setItem("notes", JSON.stringify(notes));

      console.log("hihihi", notes);
    }
    return nextAction;
  };
