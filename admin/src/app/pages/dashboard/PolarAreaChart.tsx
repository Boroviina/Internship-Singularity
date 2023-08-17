import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const PolarAreaChart: React.FC = () => {
    const polarAreaData = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
            {
                data: [10, 20, 15, 30, 25],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
            },
        ],
    };

    return <PolarArea data={polarAreaData} />;
};

export default PolarAreaChart;
