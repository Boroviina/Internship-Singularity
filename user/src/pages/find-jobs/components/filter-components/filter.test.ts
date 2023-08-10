import {JobListing} from "../../../../shared/models/job-listing.model";
import {RequirementsModel} from "../../../../shared/models/requirements.model";
import {filterJobs} from "../../JobListingPage";
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
        expect(filterJobs([job], filters))
            .toEqual([job]);
    });

    test('should return job if matches filter', () => {
        filters.setSpecialization(["Technology"]);
        expect(filterJobs([technologyJob], filters))
            .toEqual([technologyJob]);
    });

    test('should return job that matches specialization and remote', () => {
        const matchingJob = new JobListing({
            requirements: new RequirementsModel({specialization: "Technology"}),
            remote: "Remote"
        });
        filters.setSpecialization(["Technology"]);
        filters.setRemote(["Remote"]);

        expect(filterJobs([matchingJob, technologyJob], filters))
            .toEqual([matchingJob]);
    });

    test('should return job that matches specialization and experience (both are requirements)', () => {
        const matchingJob = new JobListing({
            requirements: new RequirementsModel({specialization: "Technology", experience: "High level"}),
        });
        filters.setSpecialization(["Technology"]);
        filters.setExperience(["High level"]);

        expect(filterJobs([matchingJob, technologyJob], filters))
            .toEqual([matchingJob]);
    });

    test('should return job that matches employmentType', () => {
        const matchingJob = new JobListing({employmentType: "Full time", requirements: new RequirementsModel(),});
        const nonMatchingJob = new JobListing({requirements: new RequirementsModel()});
        filters.setEmploymentType(["Full time"]);

        expect(filterJobs([matchingJob, nonMatchingJob], filters))
            .toEqual([matchingJob]);
    });

    test('should return empty array if doesnt match filter', () => {
        filters.setSpecialization(["Finance"]);

        expect(filterJobs([technologyJob], filters))
            .toEqual([]);
    });

    test('should return empty array if the job attribute being filtered is undefined', () => {
        const job = new JobListing({remote: undefined, requirements: new RequirementsModel()});
        filters.setRemote(["Remote"]);

        expect(filterJobs([job], filters))
            .toEqual([]);
    });
    test('should return two jobs, with two different specializations, when those two specializations are filtered for', () => {
        const financeJob= new JobListing({requirements: new RequirementsModel({specialization: "Finance"})});
        filters.setSpecialization(["Finance", "Technology"]);

        expect(filterJobs([technologyJob, financeJob], filters))
            .toEqual([technologyJob, financeJob]);
    });

    test('should exclude job which doesnt match any filters', () => {
        const financeJob= new JobListing({requirements: new RequirementsModel({specialization: "Finance"})});
        const marketingJob = new JobListing({requirements: new RequirementsModel({specialization: "Marketing"})});
        filters.setSpecialization(["Finance", "Technology"]);

        expect(filterJobs([technologyJob, financeJob, marketingJob], filters))
            .toEqual([technologyJob, financeJob]);
    });
});
