import {BaseModel} from "./base.model";
import {RequirementsModel} from "./requirements.model";
import {Employer} from "./employer.model";
import {JobFilters, Specialization} from "../../pages/find-jobs/components/filter-components/JobFilters";

export class JobListing extends BaseModel {
    id: string;
    title: string;
    employer: Employer;
    requirements: RequirementsModel;
    location: string;
    salary: number;
    employmentType: string;
    description: string;
    appDeadline: string;
    remote: string;
    appInstructions: string;
    positionsNum: number;
    cv: boolean;
    coverLetter: boolean;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }

    /**
     * To be used on a JobListing[] array with the javascript filter function, to reduce the scope of displayed jobs,
     * filtering them. All Filters must apply for the Job to be considered matching.
     * @param filters
     */
    matches(filters: JobFilters) {
        //TODO refactor using first example
        return this.matchesAnyItem(this.requirements[Specialization.propName], filters.get(Specialization.propName))
        && this.matchesAnyItem(this.remote, filters.remote)
        && this.matchesAnyItem(this.employmentType, filters.employmentType)
        && this.matchesAnyItem(this.requirements.experience, filters.experience)
        && this.matchesAnyItem(this.requirements.education, filters.education);
    }

    /**
     * A filter can have multiple filter items within it, and a job is considered matching if it matches at least one
     * of the items. Also, the job is matching if no filters are applied (the filter parameter is empty).
     * @param jobAttribute
     * @param filterItems
     */
    private matchesAnyItem(jobAttribute: string, filterItems: any[]) : boolean {
            if (filterItems.length === 0) {
                return true;
            }
            if (jobAttribute !== undefined) {
                return filterItems.includes(jobAttribute);
            }
            return false;
    }
}

export class JobResponse extends BaseModel {
    results: JobListing[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
        this.results = attributes.results.map(job => new JobListing(job));
    }
}

