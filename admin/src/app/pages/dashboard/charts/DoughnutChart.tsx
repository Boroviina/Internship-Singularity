import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface DoughnutChartProps {
    data: number[];
    labels: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, labels }) => {
    const doughnutData = {
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

    return <Doughnut data={doughnutData} />;
};

export default DoughnutChart;
