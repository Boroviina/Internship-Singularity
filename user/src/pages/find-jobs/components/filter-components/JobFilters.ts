class JobFilters {
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
enum Specialization {
    FinanceAndAccounting = "Finance & accounting",
    Legal = "Legal",
    Technology = "Technology",
    AdministrativeAndCustomerSupport = "Administrative & customer support",
    MarketingAndCreative = "Marketing & creative",
}

enum EmploymentType {
    FullTime = "Full time",
    PartTime = "Part time",
    Internship = "Internship",
    Contract = "Contract",
    Temporary = "Temporary",
}

enum Remote {
    Remote = "Remote",
    Hybrid = "Hybrid",
}

enum ExperienceLevel {
    NoExperience = "No experience",
    EntryLevel = "Entry level",
    MidLevel = "Mid level",
    SeniorLevel = "Senior level",
}

enum EducationLevel {
    NotRequired = "Not required",
    College = "College",
    AssociatesDegree = "Associate's degree",
    BachelorsDegree = "Bachelor's degree",
    MastersDegree = "Master's degree",
    DoctorsDegree = "Doctor's degree",
}

const sortByCategories = ["Relevance", "Date", "Salary"];

export {EducationLevel, ExperienceLevel, Remote, EmploymentType, Specialization, JobFilters, sortByCategories};
