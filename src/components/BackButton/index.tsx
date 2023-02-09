import ChevronRight from '@assets/icons/ChevronRight';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  onBack?: () => void;
}

const BackButton: FC<Props> = ({ onBack }) => {
  const navigate = useNavigate();
  return (
    <div onClick={onBack ? onBack : () => navigate(-1)}>
      <ChevronRight className="font-semibold rotate-180" width="20" height="20" />
    </div>
  );
};

export default BackButton;
