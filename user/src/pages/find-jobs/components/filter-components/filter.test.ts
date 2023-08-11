import {JobListing} from "../../../../shared/models/job-listing.model";
import {RequirementsModel} from "../../../../shared/models/requirements.model";
import {getFilteredJobs} from "../../JobListingPage";
import {JobFilters} from "./JobFilters";

describe('Filter jobs', () => {
    let technologyJob : JobListing;
    let filters : JobFilters;
    beforeEach(() => {
        technologyJob = new JobListing({requirements: new RequirementsModel({specialization: "Technology"})});
        filters = new JobFilters();
    });

    test('should return same jobs if no filter', () => {
        const job = new JobListing({requirements: new RequirementsModel({})});
        expect(getFilteredJobs([job], filters))
            .toEqual([job]);
    });

    test('should return job if matches filter', () => {
        filters.specialization = ["Technology"];
        expect(getFilteredJobs([technologyJob], filters))
            .toEqual([technologyJob]);
    });

    test('should return job that matches specialization and remote', () => {
        const matchingJob = new JobListing({
            requirements: new RequirementsModel({specialization: "Technology"}),
            remote: "Remote"
        });
        filters.specialization = ["Technology"];
        filters.remote = ["Remote"];

        expect(getFilteredJobs([matchingJob, technologyJob], filters))
            .toEqual([matchingJob]);
    });

    test('should return job that matches specialization and experience (both are requirements)', () => {
        const matchingJob = new JobListing({
            requirements: new RequirementsModel({specialization: "Technology", experience: "High level"}),
        });
        filters.specialization = ["Technology"];
        filters.experience = ["High level"];

        expect(getFilteredJobs([matchingJob, technologyJob], filters))
            .toEqual([matchingJob]);
    });

    test('should return job that matches employmentType', () => {
        const matchingJob = new JobListing({employmentType: "Full time", requirements: new RequirementsModel(),});
        const nonMatchingJob = new JobListing({requirements: new RequirementsModel()});
        filters.employmentType = ["Full time"];

        expect(getFilteredJobs([matchingJob, nonMatchingJob], filters))
            .toEqual([matchingJob]);
    });

    test('should return empty array if doesnt match filter', () => {
        filters.specialization = ["Finance"];

        expect(getFilteredJobs([technologyJob], filters))
            .toEqual([]);
    });

    test('should return empty array if the job attribute being filtered is undefined', () => {
        const job = new JobListing({remote: undefined, requirements: new RequirementsModel()});
        filters.remote = ["Remote"];

        expect(getFilteredJobs([job], filters))
            .toEqual([]);
    });
    test('should return two jobs, with two different specializations, when those two specializations are filtered for', () => {
        const financeJob= new JobListing({requirements: new RequirementsModel({specialization: "Finance"})});
        filters.specialization = ["Finance", "Technology"];

        expect(getFilteredJobs([technologyJob, financeJob], filters))
            .toEqual([technologyJob, financeJob]);
    });

    test('should exclude job which doesnt match any filters', () => {
        const financeJob= new JobListing({requirements: new RequirementsModel({specialization: "Finance"})});
        const marketingJob = new JobListing({requirements: new RequirementsModel({specialization: "Marketing"})});
        filters.specialization = ["Finance", "Technology"];

        expect(getFilteredJobs([technologyJob, financeJob, marketingJob], filters))
            .toEqual([technologyJob, financeJob]);
    });
});
