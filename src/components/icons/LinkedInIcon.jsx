import * as React from 'react';

function SvgLinkedInIcon(props, svgRef) {
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
        d="M19.8 3H4.2A1.2 1.2 0 003 4.2v15.6A1.2 1.2 0 004.2 21h15.6a1.2 1.2 0 001.2-1.2V4.2A1.2 1.2 0 0019.8 3zM8.332 18.356H5.624V9.75h2.708v8.606zM6.978 8.57a1.575 1.575 0 11.01-3.15 1.575 1.575 0 01-.01 3.15zm11.395 9.787H15.72v-4.162c0-1.013 0-2.25-1.41-2.25s-1.58 1.069-1.58 2.193v4.276h-2.65V9.75h2.482v1.181h.056a2.82 2.82 0 012.539-1.406c2.707 0 3.215 1.8 3.215 4.106v4.725z"
        fill="#1A2847"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgLinkedInIcon);
export default ForwardRef;
