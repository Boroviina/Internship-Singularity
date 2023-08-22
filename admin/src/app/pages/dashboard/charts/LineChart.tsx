import React from 'react';
import { Line } from 'react-chartjs-2';

interface LineChartProps {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        fill: boolean;
    }[];
}

const LineChart: React.FC<LineChartProps> = ({ labels, datasets }) => {
    const lineChartData = {
        labels,
        datasets,
    };

    return <Line data={lineChartData} />;
};

export default LineChart;
