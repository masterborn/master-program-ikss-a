import * as React from 'react';

function SvgXIcon(props, svgRef) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M18.295 5.705a.997.997 0 00-1.41 0L12 10.59 7.115 5.705a.997.997 0 00-1.41 1.41L10.59 12l-4.885 4.885a.997.997 0 001.41 1.41L12 13.41l4.885 4.885a.997.997 0 101.41-1.41L13.41 12l4.885-4.885a.997.997 0 000-1.41z"
        fill="#61798B"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgXIcon);
export default ForwardRef;
