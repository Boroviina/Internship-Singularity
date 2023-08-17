import React from 'react';
import { PolarArea } from 'react-chartjs-2';

interface PolarAreaChartProps {
    data: number[];
    labels: string[];
}

const PolarAreaChart: React.FC<PolarAreaChartProps> = ({ data, labels }) => {
    const polarAreaData = {
        labels,
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
            },
        ],
    };

    return <PolarArea data={polarAreaData} />;
};

export default PolarAreaChart;
