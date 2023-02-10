import BackButton from "@components/BackButton";
import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderWrapper } from "../styles/Header";

interface HeaderProps {
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  title?: string;
  editMode?: boolean;
  titleEdit?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({
  leftContent,
  title,
  rightContent,
  editMode,
  titleEdit,
}) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper className="flex justify-between items-center px-3 py-3">
      {leftContent ? leftContent : <BackButton />}

      <h1 className="w-1/2 overflow-hidden text-ellipsis whitespace-nowrap text-base text-black font-semibold text-center">
        {title ? title : null}
      </h1>

      {rightContent ? (
        rightContent
      ) : (
        <div
          onClick={() => navigate(-1)}
          className="font-semibold text-[#004dff]"
        >
          Done
        </div>
      )}
    </HeaderWrapper>
  );
};

export default Header;
