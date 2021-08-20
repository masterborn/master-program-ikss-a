import * as React from 'react';

function SvgYoutubeCircleIcon(props, svgRef) {
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
        d="M18.187 9.441s-.12-.88-.5-1.28c-.48-.5-1.04-.52-1.281-.54-1.821-.121-4.502-.121-4.502-.121s-2.682 0-4.483.12c-.26.02-.8.04-1.28.54-.38.38-.5 1.281-.5 1.281s-.141 1.04-.141 2.081v.98c0 1.041.12 2.082.12 2.082s.12.88.5 1.28c.48.5 1.121.5 1.421.54 1.02.101 4.362.121 4.362.121s2.682 0 4.483-.14c.26-.02.8-.04 1.28-.54.381-.38.501-1.281.501-1.281s.14-1.04.14-2.081v-.98c0-1.021-.12-2.062-.12-2.062zm-7.604 4.222v-3.602l3.462 1.801-3.462 1.801z"
        fill="#1889E9"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgYoutubeCircleIcon);
export default ForwardRef;
