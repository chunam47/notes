import { FC, SVGProps } from 'react';

const BulletList: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0.75C4 0.335786 4.33579 0 4.75 0H17.75C18.1642 0 18.5 0.335786 18.5 0.75C18.5 1.16421 18.1642 1.5 17.75 1.5H4.75C4.33579 1.5 4 1.16421 4 0.75Z"
        fill="#004DFF"
      />
      <circle cx="0.75" cy="0.75" r="0.75" fill="#004DFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7.75C4 7.33579 4.33579 7 4.75 7H17.75C18.1642 7 18.5 7.33579 18.5 7.75C18.5 8.16421 18.1642 8.5 17.75 8.5H4.75C4.33579 8.5 4 8.16421 4 7.75Z"
        fill="#004DFF"
      />
      <circle cx="0.75" cy="7.75" r="0.75" fill="#004DFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 14.75C4 14.3358 4.33579 14 4.75 14H17.75C18.1642 14 18.5 14.3358 18.5 14.75C18.5 15.1642 18.1642 15.5 17.75 15.5H4.75C4.33579 15.5 4 15.1642 4 14.75Z"
        fill="#004DFF"
      />
      <circle cx="0.75" cy="14.75" r="0.75" fill="#004DFF" />
    </svg>
  );
};

export default BulletList;
