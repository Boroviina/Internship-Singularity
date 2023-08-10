import {JobListing} from "../../../../shared/models/job-listing.model";
import {RequirementsModel} from "../../../../shared/models/requirements.model";
import {filterJobs} from "../../JobListingPage";
import {JobFilters} from "./JobFilters";

describe('Filter jobs', () => {
    test('should return same jobs if no filter', () => {
        const job = new JobListing({requirements: new RequirementsModel({}),});
        const filters = new JobFilters([], [], [], [], []);

        expect(filterJobs([job], filters))
            .toEqual([job]);
    });

    let technologyJob;
    beforeAll(() => {
        technologyJob = new JobListing({requirements: new RequirementsModel({specialization: "Technology"})});
    });

    test('should return job if matches filter', () => {
        const filters = new JobFilters(["Technology"], [], [], [], []);

        expect(filterJobs([technologyJob], filters))
            .toEqual([technologyJob]);
    });

    test('should return job that matches specialization and remote', () => {
        const matchingJob = new JobListing({
            requirements: new RequirementsModel({specialization: "Technology"}),
            remote: "Remote"
        });
        const filters = new JobFilters(["Technology"], ["Remote"], [], [], []);

        expect(filterJobs([matchingJob, technologyJob], filters))
            .toEqual([matchingJob]);
    });

    test('should return job that matches specialization and experience (both are requirements)', () => {
        const matchingJob = new JobListing({
            requirements: new RequirementsModel({specialization: "Technology", experience: "High level"}),
        });
        const filters = new JobFilters(["Technology"], [], [], ["High level"], []);

        expect(filterJobs([matchingJob, technologyJob], filters))
            .toEqual([matchingJob]);
    });

    test('should return job that matches employmentType', () => {
        const matchingJob = new JobListing({employmentType: "Full time", requirements: new RequirementsModel(),});
        const nonMatchingJob = new JobListing({requirements: new RequirementsModel()});
        const filters = new JobFilters([], [], ["Full time"], [], []);

        expect(filterJobs([matchingJob, nonMatchingJob], filters))
            .toEqual([matchingJob]);
    });

    test('should return empty array if doesnt match filter', () => {
        const filters = new JobFilters(["Finance"], [], [], [], []);

        expect(filterJobs([technologyJob], filters))
            .toEqual([]);
    });

    test('should return empty array if the job attribute being filtered is undefined', () => {
        const job = new JobListing({remote: undefined, requirements: new RequirementsModel()});
        const filters = new JobFilters([], ["Remote"], [], [], []);

        expect(filterJobs([job], filters))
            .toEqual([]);
    });
    test('should return two jobs, with two different specializations, when those two specializations are filtered for', () => {
        const financeJob= new JobListing({requirements: new RequirementsModel({specialization: "Finance"})});
        const filters = new JobFilters(["Finance", "Technology"], [], [], [], []);

        expect(filterJobs([technologyJob, financeJob], filters))
            .toEqual([technologyJob, financeJob]);
    });

    test('should exclude job which doesnt match any filters', () => {
        const financeJob= new JobListing({requirements: new RequirementsModel({specialization: "Finance"})});
        const marketingJob = new JobListing({requirements: new RequirementsModel({specialization: "Marketing"})});
        const filters = new JobFilters(["Finance", "Technology"], [], [], [], []);

        expect(filterJobs([technologyJob, financeJob, marketingJob], filters))
            .toEqual([technologyJob, financeJob]);
    });
});
