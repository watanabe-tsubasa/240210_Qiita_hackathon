import { useFetchPoint } from '@/Hooks/useFetcher';
import  { useEffect, useState } from 'react';

export function PointConfirm() {
  const { point } = useFetchPoint()
  return (
      <div className="relative mt-4 mx-8 flex items-center justify-center">
          <CircularProgress value={point?.emopoint ?? 0} max={50} />
      </div>
  )
}

interface CircularProgressType {
  value: number;
  max: number;
}

const CircularProgress: React.FC<CircularProgressType> = ({ value, max }) => {
  const size = 270;
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
        stroke="#55c500"
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
      <text className="text-8xl font-bold" x="40%" y="50%" dy="0.3em" textAnchor="middle" style={{fill: 'rgba(0,0,0,0.7)'}}>{`${value}`}</text>
      <text className="text-4xl" x="75%" y="55%" dy="0.3em" textAnchor="middle" style={{fill: 'rgba(0,0,0,0.7)'}}>pts</text>
    </svg>
  );
};
