class JobFilters {

    specialization: string[] = [];
    remote: string[] = [];
    employmentType: string[] = [];
    experience: string[] = [];
    education: string[] = [];

    constructor(
        specialization: string[] = [],
        remote: string[] = [],
        employmentType: string[] = [],
        experience: string[] = [],
        education: string[] = [],
    ) {
        this.specialization = specialization;
        this.remote = remote;
        this.employmentType = employmentType;
        this.experience = experience;
        this.education = education;
    }

    /**
     * Takes a JobFilters and copies it to this instance, without you having to put individual fields in the constructor.
     * @param filters
     */
    copy(filters: JobFilters) {
        this.specialization = filters.specialization;
        this.remote = filters.remote;
        this.employmentType = filters.employmentType;
        this.experience = filters.experience;
        this.education = filters.education;
    }
}

abstract class FilterProperties {
    static displayName: string = "";
    static nameInJob: string = "";
    static values: string[] = [];
}

class Specialization extends  FilterProperties{
    static displayName: string = "Specialization"
    static nameInJob: string = "specialization";
    static values: string[] = ["Finance & accounting", "Legal", "Technology", "Administrative & customer support", "Marketing & creative"];
}

 class EmploymentType extends  FilterProperties{
    static displayName: string = "Employment type";
    static nameInJob: string = "employmentType";
    static values: string[] = ["Full time", "Part time", "Internship", "Contract", "Temporary"];
}

 class Remote extends  FilterProperties{
    static displayName: string = "Remote";
    static nameInJob: string = "remote";
    static values: string[] = ["Remote", "Hybrid"];
}

 class Experience extends  FilterProperties{
    static displayName: string = "Experience level";
    static nameInJob: string = "experience";
    static values: string[] = ["No experience", "Entry level", "Mid level", "Senior level"];
}

 class Education extends  FilterProperties{
    static displayName: string = "Education level";
    static nameInJob: string = "education";
    static values: string[] = ["Not required", "College", "Associate's degree", "Bachelor's degree", "Master's degree", "Doctor's degree"];
}


const sortByCategories = ["Relevance", "Date", "Salary"];

export {FilterProperties, Education, Experience, Remote, EmploymentType, Specialization, JobFilters, sortByCategories};
