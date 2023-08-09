import {BaseModel} from "./base.model";
import {RequirementsModel} from "./requirements.model";
import {Employer} from "./employer.model";
import {JobFilters} from "./JobFilters";

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
     * To be used on a JobListing[] array with the javascript filter function, to reduce the scope of displayed jobs
     * - filtering them. Filters must all apply for the Job to be considered matching.
     * @param filters
     */
    matchesFilters(filters: JobFilters) {
        return this.matchesAnyFilter(this.requirements.specialization, filters.specialization)
        && this.matchesAnyFilter(this.remote, filters.remote)
        && this.matchesAnyFilter(this.employmentType, filters.employmentType)
        && this.matchesAnyFilter(this.requirements.experience, filters.experience)
        && this.matchesAnyFilter(this.requirements.education, filters.education);
    }

    /**
     * A filter can have multiple filter items within it, and a job is considered matching if it matches at least one
     * of the items in the group.
     * @param jobAttribute
     * @param filterItems
     */
    matchesAnyFilter(jobAttribute: string, filterItems: string[]) {
        if (filterItems.length === 0) {
            return true;
        } else {
            for (let i = 0; i < filterItems.length; i++) {
                if (filterItems[i] === jobAttribute) {
                    return true;
                }
            }
            return false;
        }
    }
}

