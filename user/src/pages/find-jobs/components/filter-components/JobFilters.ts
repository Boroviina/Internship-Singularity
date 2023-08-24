class JobFilters {

    filters: {
        [name: string]: string[]
    } = {};

    constructor() {
        this.initializeFilters();
    }

    /** If you don't add the filter here, you might get an error! */
    initializeFilters() {
        this.filters[Specialization.propName] = [];
        this.filters[EmploymentType.propName] = [];
        this.filters[Remote.propName] = [];
        this.filters[Experience.propName] = [];
        this.filters[Education.propName] = [];
    }

    copy(oldFilters: JobFilters) {
        for (const property in this.filters) {
            if (property in oldFilters) {
                this.filters[property] = [...oldFilters.filters[property]];
            }
        }
    }
    get(name: string): string[] {
        return this.filters[name];
    }

    set(name: string, value: string[]) {
        this.filters[name] = value;
    }

    get specialization(): string[] {
        return this.filters[Specialization.propName];
    }
    set specialization(value: string[]) {
        this.filters[Specialization.propName] = value;
    }

    get employmentType(): string[] {
        return this.filters[EmploymentType.propName];
    }
    set employmentType(value: string[]) {
        this.filters[EmploymentType.propName] = value;
    }

    get remote(): string[] {
        return this.filters[Remote.propName];
    }
    set remote(value: string[]) {
        this.filters[Remote.propName] = value;
    }

    get experience(): string[] {
        return this.filters[Experience.propName];
    }
    set experience(value: string[]) {
        this.filters[Experience.propName] = value;
    }

    get education(): string[] {
        return this.filters[Education.propName];
    }
    set education(value: string[]) {
        this.filters[Education.propName] = value;
    }
}

abstract class MyFilter {
    static displayName: string = "";
    static propName: string = "";
    static values: string[] = [];
}

class Specialization extends MyFilter{
    static displayName: string = "Specialization"
    static propName: string = "specialization";
    static values: string[] = ["Finance & accounting", "Legal", "Technology", "Administrative & customer support", "Marketing & creative"];
}

 class EmploymentType extends MyFilter{
    static displayName: string = "Employment type";
    static propName: string = "employmentType";
    static values: string[] = ["Full time", "Part time", "Internship", "Contract", "Temporary"];
}

 class Remote extends MyFilter{
    static displayName: string = "Remote";
    static propName: string = "remote";
    static values: string[] = ["Remote", "Hybrid"];
}

 class Experience extends MyFilter{
    static displayName: string = "Experience level";
    static propName: string = "experience";
    static values: string[] = ["No experience", "Entry level", "Mid level", "Senior level"];
}

 class Education extends MyFilter{
    static displayName: string = "Education level";
    static propName: string = "education";
    static values: string[] = ["Not required", "College", "Associate's degree", "Bachelor's degree", "Master's degree", "Doctor's degree"];
}

const sortByCategories = ["Relevance", "Salary"];

export {MyFilter, Education, Experience, Remote, EmploymentType, Specialization, JobFilters, sortByCategories};
