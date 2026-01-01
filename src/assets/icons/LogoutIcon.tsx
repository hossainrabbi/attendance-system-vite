import type { SVGAttributes } from "react";

export default function LogoutIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.1726 3.98438L13.125 6.9375L10.1726 9.89062M5.25 6.9375H13.1229M5.25 13.125H1.3125C1.16332 13.125 1.02024 13.0657 0.914753 12.9602C0.809263 12.8548 0.75 12.7117 0.75 12.5625V1.3125C0.75 1.16332 0.809263 1.02024 0.914753 0.914753C1.02024 0.809263 1.16332 0.75 1.3125 0.75H5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
