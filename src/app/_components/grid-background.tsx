type GridBackgroundProps = {};

export default function GridBackground({}: GridBackgroundProps) {
  return (
    <div className="absolute -z-10 h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"></div>
  );
}
