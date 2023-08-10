import React, {useEffect, useState} from 'react';
import {createSavedJob, deleteSavedJob, getSavedJobsByJobId} from "../../../../shared/services/job-saved.service";
import {JobListing} from "../../../../shared/models/job-listing.model";

interface ApplyOrSaveProps {
    job: JobListing;
    update(): void;
}

const ApplyOrSave = ({job, update}: ApplyOrSaveProps) => {
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const fetchIsJobSaved = async () => {
            try {
                const results = await getSavedJobsByJobId(job.id);
                setSaved(!!results[0])
            } catch(error) {
                console.log(error)
            }
        }
        fetchIsJobSaved();
    }, [job.id]);

    const onSave = async () => {
        try {
            await createSavedJob({job: job.id})
            update();
            setSaved(true);
        } catch (error) {
            console.log(error)
        }
    }

    const onUnsave = async () => {
        try {
            const results = await getSavedJobsByJobId(job.id);
            await deleteSavedJob(results[0].id);
            update();
            setSaved(false);
        } catch (error) {
            console.log(error)
        }
    }

    return (
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
    );
};

export default ApplyOrSave;