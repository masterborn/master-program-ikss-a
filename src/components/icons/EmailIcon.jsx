import * as React from 'react';

function SvgEmailIcon(props, svgRef) {
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
        d="M19.161 5.059a.25.25 0 00-.252-.042l-14 5.5a.25.25 0 00-.054.437l2.26 1.607 5.718-2.648-4.583 3.455v5.382a.25.25 0 00.402.2l3.595-2.74 3.858 2.744a.248.248 0 00.337-.043.25.25 0 00.053-.111l2.75-13.5a.25.25 0 00-.084-.241z"
        fill="#61798B"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgEmailIcon);
export default ForwardRef;
