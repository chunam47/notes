import { FC, SVGProps } from 'react';

const ChevronRight: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="7"
      height="11"
      viewBox="0 0 7 11"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M1 0.500366L6 5.50037L1 10.5004"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRight;
