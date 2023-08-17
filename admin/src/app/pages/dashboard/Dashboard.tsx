import React from "react";
import BarChart from "./BarChart";
import PolarAreaChart from "./PolarAreaChart";

export function Dashboard() {
    // Sample data
    const employersData = [15, 20, 25]; // Replace with actual data
    const jobSeekersData = [10, 18, 22]; // Replace with actual data
    const labels = ['January', 'February', 'March']; // Replace with labels
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

    return (
        <div>
            <h2>Metrics Dashboard</h2>
            <div>
                <h3>Number of Registered Employers</h3>
                <BarChart data={employersData} labels={labels} title="Employers" />
            </div>
            <div>
                <h3>Number of Job Seekers</h3>
                <BarChart data={jobSeekersData} labels={labels} title="Job Seekers" />
            </div>
            <div>
                <h1>Polar Area Chart Example</h1>
                <PolarAreaChart />
            </div>
        </div>
    );
}
