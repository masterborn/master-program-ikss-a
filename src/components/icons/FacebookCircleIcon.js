import * as React from 'react';

function SvgFacebookCircleIcon(props, svgRef) {
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
        d="M10.296 18.4v-5.547H8.4v-2.56h1.896V8.506c0-1.948 1.229-2.906 2.959-2.906.829 0 1.541.062 1.749.09v2.035h-1.2c-.941 0-1.154.45-1.154 1.108v1.46h2.55l-.85 2.56h-1.7V18.4h-2.354z"
        fill="#1889E9"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFacebookCircleIcon);
export default ForwardRef;
