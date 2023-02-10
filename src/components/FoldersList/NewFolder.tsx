import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";
import { ButtonText, NewFolderButton } from "../styles/FoldersList/NewFolder";
import BaseModal from "@components/BaseModal";
import "./index.scss";
import FolderPlus from "@assets/icons/FolderPlus";
import { createFolder, Folder } from "@redux/notes";
import { useAppDispatch } from "@redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const NewFolder = () => {
  const [modal, setModal] = useState(false);
  const [nameFolder, setNameFolder] = useState("");
  const dispatch = useAppDispatch();
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const trimmedValue = nameFolder.trim();
    if (trimmedValue === "") {
      return;
    } else {
      const id = crypto.randomUUID();
      const title = trimmedValue;
      const notes = [];
      let folder: Folder = { id, title, notes };
      dispatch(createFolder(folder));
      setNameFolder("");
      setModal(false);
    }
  };

  return (
    <>
      <NewFolderButton className="fixed bottom-4 left-4">
        <ButtonText onClick={openModal}>
          <FolderPlus />
        </ButtonText>
      </NewFolderButton>
      <BaseModal visible={modal} onClose={closeModal}>
        <div className="px-3 py-5">
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
            <label className="text-black">
              <div className="font-semibold">Folder Name</div>
              <input
                className="w-full bg-white border py-2.5 px-3 text-black rounded-md focus:outline-none"
                value={nameFolder}
                onChange={(e) => setNameFolder(e.target.value)}
              />
            </label>
            <div className="button-new-folder">
              <button
                className="button-submit"
                onClick={(event) => handleSubmit(event)}
              >
                Submit
              </button>
              <button className="button-close" onClick={closeModal}>
                Close
              </button>
            </div>
          </form>
        </div>
      </BaseModal>
    </>
  );
};

export default NewFolder;
