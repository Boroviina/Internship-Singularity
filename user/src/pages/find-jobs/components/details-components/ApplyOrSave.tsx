import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {createSavedJob, deleteSavedJob, getUsersSavedJobsByJobId} from "../../../../shared/services/job-saved.service";
import {JobListing} from "../../../../shared/models/job-listing.model";
import {useAuth} from "../../../../modules/auth";

interface ApplyOrSaveProps {
    job: JobListing;
    update(): void;
    isJobSaved?: boolean;
}

const ApplyOrSave = ({job, update, isJobSaved}: ApplyOrSaveProps) => {
    const [saved, setSaved] = useState(isJobSaved);
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    const fetchIsJobSaved = async () => {
        try {
            const results = await getUsersSavedJobsByJobId(`${currentUser.id}`, job.id);
            setSaved(!!results[0])
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchIsJobSaved();
    }, [isJobSaved]);

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
            const results = await getUsersSavedJobsByJobId(`${currentUser.id}`, job.id);
            await deleteSavedJob(results[0].id);
            update();
            setSaved(false);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`d-flex align-items-center gap-2 mt-2 mt-sm-0 mx-3`}>
            <button type="button" className={`btn btn-pink`} onClick={() => navigate(`/apply/${job.id}`)}>
                Apply
            </button>
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{saved ? 'Unsave' : 'Save'}</Tooltip>}
            >
                <i
                    className={`bi ${saved ? 'bi-heart-fill' : 'bi-heart'} fs-3 ms-2`}
                    style={{ color: '#fb246a' }}
                    onClick={saved ? onUnsave : onSave}
                />
            </OverlayTrigger>
        </div>
    );
};

export default ApplyOrSave;