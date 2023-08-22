import React from 'react';
import {JobListing} from "../../../shared/models/job-listing.model";

export function getSortedBySalaryDescending(jobs: JobListing[]) {
    return jobs.sort((job1, job2) => (job2.salary - job1.salary));
}

const SortBy = ({categories, sortBy}) => {
    const handleChange = (e) => {
        sortBy(e.target.value);
    };
    return (
        <div className="sortBy">
            <h5>Sort by</h5>
            <select onChange={handleChange} className="form-select" aria-label="sortBy">
                {categories.map((category) => {
                    return <option value={category} key={category}>{category}</option>;
                })}
            </select>
        </div>
    );
};

export default SortBy;