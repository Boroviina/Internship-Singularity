export class JobFilters {
    specialization: string[] = [];
    remote: string[] = [];
    employmentType: string[] = [];
    experience: string[] = [];
    education: string[] = [];

    constructor(specialization: string[], remote: string[], employmentType: string[], experienceLevel: string[], educationLevel: string[]) {
        this.specialization = specialization;
        this.remote = remote;
        this.employmentType = employmentType;
        this.experience = experienceLevel;
        this.education = educationLevel;
    }
}