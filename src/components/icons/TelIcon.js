import * as React from 'react';

function SvgTelIcon(props, svgRef) {
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
        d="M19.085 14.4l-3.137-1.392a1.542 1.542 0 00-1.824.442l-.947 1.185a12.426 12.426 0 01-3.813-3.812l1.184-.946a1.541 1.541 0 00.444-1.826L9.6 4.914a1.539 1.539 0 00-1.793-.865l-2.652.69a1.545 1.545 0 00-1.14 1.705 15.976 15.976 0 0013.543 13.541 1.544 1.544 0 001.705-1.139l.688-2.653a1.533 1.533 0 00-.864-1.793z"
        fill="#61798B"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTelIcon);
export default ForwardRef;
