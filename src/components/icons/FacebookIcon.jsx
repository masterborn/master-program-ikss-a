import * as React from 'react';

function SvgFacebookIcon(props, svgRef) {
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
        d="M9.445 21.6v-8.32H6.6V9.44h2.845V6.758c0-2.92 1.842-4.358 4.437-4.358 1.244 0 2.312.093 2.624.134v3.053h-1.8c-1.412 0-1.731.674-1.731 1.663v2.19H16.8l-1.275 3.84h-2.55v8.32h-3.53z"
        fill="#1A2847"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFacebookIcon);
export default ForwardRef;
