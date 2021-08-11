import * as React from 'react';

function SvgErrorIcon(props, svgRef) {
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
        d="M16.721 7.279a.748.748 0 00-1.057 0L12 10.943 8.336 7.279A.748.748 0 007.28 8.336L10.943 12l-3.664 3.664a.748.748 0 001.057 1.057L12 13.057l3.664 3.664a.748.748 0 001.057-1.057L13.057 12l3.664-3.664a.748.748 0 000-1.057z"
        fill="#61798B"
      />
      <circle cx={12} cy={12} r={9.75} stroke="#61798B" strokeWidth={1.5} />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgErrorIcon);
export default ForwardRef;
