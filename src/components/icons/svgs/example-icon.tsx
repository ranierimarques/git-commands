export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.429 21H6a3 3 0 0 1-3-3v-6m0 0V6a3 3 0 0 1 3-3h3.43M3 12h4.714m5.572 9c3.347-3.515 4.367-5.485 7.714-9m-7.714 0c3.347 3.515 4.367 5.485 7.714 9"
        stroke="url(#paint0_linear_141_49)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_141_49"
          x1="2.571"
          y1="2.55"
          x2="22.753"
          y2="20.916"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6" />
          <stop offset=".469" stopColor="#B3B3B3" />
          <stop offset="1" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="#E6E6E6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
