import { DataItem } from '@/utils/sampleData';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

interface CommonRaderChartType {
  data: DataItem[]
}

export const CommonRaderChart: React.FC<CommonRaderChartType> = ({ data }) => {
  return (
    <div className='flex justify-center items-center'>
      <RadarChart cx="50%" cy="50%" outerRadius="75%" width={350} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={60} domain={[0, 15]} />
        <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}