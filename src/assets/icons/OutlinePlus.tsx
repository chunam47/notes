import { FC, SVGProps } from 'react';

const OutlinePlus: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M14.6666 6.66669H9.33335V1.3334C9.33335 0.597399 8.73735 4.57764e-05 8 4.57764e-05C7.26265 4.57764e-05 6.66664 0.597399 6.66664 1.3334V6.66669H1.33336C0.596009 6.66669 0 7.26404 0 8.00005C0 8.73605 0.596009 9.3334 1.33336 9.3334H6.66664V14.6667C6.66664 15.4027 7.26265 16 8 16C8.73735 16 9.33335 15.4027 9.33335 14.6667V9.3334H14.6666C15.404 9.3334 16 8.73605 16 8.00005C16 7.26404 15.404 6.66669 14.6666 6.66669Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default OutlinePlus;
