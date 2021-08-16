import * as React from 'react';

function SvgYoutubeIcon(props, svgRef) {
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
        d="M21.28 8.162s-.18-1.321-.75-1.921c-.72-.75-1.56-.78-1.92-.81-2.732-.181-6.755-.181-6.755-.181s-4.022 0-6.723.18c-.39.03-1.201.06-1.921.81-.57.57-.75 1.922-.75 1.922s-.211 1.56-.211 3.121v1.471c0 1.561.18 3.122.18 3.122s.18 1.32.75 1.921c.72.75 1.681.75 2.132.81 1.53.15 6.543.18 6.543.18s4.022 0 6.724-.21c.39-.03 1.2-.06 1.921-.81.57-.57.75-1.921.75-1.921s.21-1.561.21-3.122v-1.47c0-1.532-.18-3.092-.18-3.092zM9.874 14.495V9.092l5.193 2.702-5.193 2.701z"
        fill="#1A2847"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgYoutubeIcon);
export default ForwardRef;
