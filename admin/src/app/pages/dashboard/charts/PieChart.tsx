import React from 'react';
import {Pie} from 'react-chartjs-2';

const PieChart = ({data, labels}) => {
    const chartData = {
        labels,
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(102, 204, 102, 0.6)',
                    'rgba(185,204,102,0.6)',
                    'rgba(102,122,204,0.6)',
                ],
            },
        ],
    };

    return <Pie data={chartData}/>;
};

export default PieChart;
