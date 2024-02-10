import  { useEffect, useState } from 'react';

export function PointConfirm() {
  return (
      <div className="relative mt-4 flex items-center justify-center">
          <CircularProgress value={37} max={50} />
      </div>
  )
}

interface CircularProgressType {
  value: number;
  max: number;
}

const CircularProgress: React.FC<CircularProgressType> = ({ value, max }) => {
  const size = 330;
  const strokeWidth = 25;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = (value / max) * circumference;
    setProgress(updateProgress);
  }, [value, max, circumference]);

  return (
    <svg width={size} height={size} style={{ '--progress': progress } as React.CSSProperties}>
      <circle
        stroke="lightgrey"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        stroke="blue"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={`calc(${circumference} - var(--progress))`}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text className="text-9xl" x="45%" y="50%" dy="0.3em" textAnchor="middle" style={{fill: 'rgba(0,0,0,0.7)'}}>{`${value}`}</text>
      <text className="text-5xl" x="75%" y="55%" dy="0.3em" textAnchor="middle" style={{fill: 'rgba(0,0,0,0.7)'}}>pts</text>
    </svg>
  );
};
