import * as React from 'react';

function SvgLinkedinCircleIcon(props, svgRef) {
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
      <circle cx={12} cy={12} r={12} fill="#EAF5FF" />
      <path
        d="M17.2 6H6.8a.8.8 0 00-.8.8v10.4a.8.8 0 00.8.8h10.4a.8.8 0 00.8-.8V6.8a.8.8 0 00-.8-.8zM9.555 16.238H7.75V10.5h1.805v5.738zm-.903-6.526a1.05 1.05 0 11.006-2.1 1.05 1.05 0 01-.006 2.1zm7.596 6.526H14.48v-2.776c0-.674 0-1.5-.94-1.5s-1.053.713-1.053 1.463v2.85H10.72V10.5h1.654v.788h.038a1.88 1.88 0 011.692-.938c1.806 0 2.144 1.2 2.144 2.738v3.15z"
        fill="#1889E9"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgLinkedinCircleIcon);
export default ForwardRef;
