import React from 'react';
import { Bar } from 'react-chartjs-2';

interface BarChartProps {
    datasets: {
        data: number[];
        label: string;
        backgroundColor: string;
    }[];
    labels: string[];
    title?: string;
}

const BarChart: React.FC<BarChartProps> = ({ datasets, labels, title }) => {
    const chartData = {
        labels,
        datasets: datasets.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: dataset.backgroundColor,
        })),
    };

    return <Bar data={chartData} />;
};

export default BarChart;
