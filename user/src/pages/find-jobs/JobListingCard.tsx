import React, {useEffect, useState} from 'react';
import {JobListing} from "../../shared/models/job-listing.model";
import TimeAgo from "./components/TimeAgo";
import {
    createSavedJob,
    deleteSavedJob,
    getSavedJobsByJobId,
} from "../../shared/services/job-saved.service";

const logo = require('./img/logo-fb.jpg');

interface JobProps {
    job: JobListing;
    showDetails(job: JobListing): void;
    update(): void;
}

const JobListingCard = ({job, showDetails, update} : JobProps) => {
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const fetchIsJobSaved = async () => {
            try {
                const results = await getSavedJobsByJobId(job.id);
                setSaved(!!results[0])
            } catch(error) {
                // navigate('/error/500');
                console.log(error)
            }
        }
        fetchIsJobSaved();
    }, [job.id]);

    const clickHandler = (e) => {
      showDetails(job);
    };

    const onSave = async () => {
        await createSavedJob({job: `${job.id}`})
        update();
        setSaved(true);
    }

    const onUnsave = async () => {
        const results = await getSavedJobsByJobId(job.id);
        await deleteSavedJob(results[0].id);
        update();
        setSaved(false);
    }

    const writeCardInfo = (args: any[]) => {
        return (args.map((el) => {
            return <span key={Math.random().toString()}>{el && ' \u2022 ' + el}</span>;
        }));
    };

    return (
        <article className={`d-flex justify-content-between flex-column flex-sm-row w-100 p-3 mb-1 card`}>
            <div className="d-flex align-items-center">
                <a className="me-3" href="src/pages/find-jobs/JobListing#">
                    <img src={logo} className={`p-1`}
                         style={{height: "4rem"}}
                         alt={"Company Logo"}/>
                </a>
                <div onClick={clickHandler} className={`pointer flex-grow-1`}>
                        <h4 className={`label`}>{job.jobTitle}</h4>
                    <span className="fw-semibold">
                        <span>{job.employer.companyName}</span>
                        <span className="text-black-50">
                            {writeCardInfo([job.location, job.salary, job.employmentType])}
                        </span>
                    </span>
                </div>
            </div>
            <div className={`d-flex align-items-center gap-2 mt-2 mt-sm-0 mx-3`}>
                <button type="button" className={`btn btn-pink`}>
                    Apply
                </button>
                {saved ?
                    // <button type="button" className={`btn btn-white`} onClick={onUnsave}>Unsave</button>
                    <i className="bi bi-heart-fill fs-3 ms-2" style={{color: '#fb246a'}} onClick={onUnsave}></i>
                    :
                    // <button type="button" className={`btn btn-white`} onClick={onSave}>Save</button>
                    <i className="bi bi-heart fs-3 ms-2" style={{color: '#fb246a'}} onClick={onSave}></i>}
            </div>
        </article>
    );
};

export default JobListingCard;