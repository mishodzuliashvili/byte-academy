type LogoSVGProps = {
  color?: string;
};

export default function LogoSVG({ color }: LogoSVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={42} height={40} fill="none">
      <path
        stroke={`hsl(var(${color}))`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M2.25 15 21 5l18.75 10L21 25 2.25 15Z"
      />
      <path
        stroke={`hsl(var(${color}))`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M30.375 37.5V20L21 15"
      />
      <path
        stroke={`hsl(var(${color}))`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M35.375 17.333v8.52c0 .269-.087.531-.248.747C34.074 28 29.633 33.125 21 33.125 12.367 33.125 7.926 28 6.873 26.6a1.243 1.243 0 0 1-.248-.748v-8.519"
      />
    </svg>
  );
}
