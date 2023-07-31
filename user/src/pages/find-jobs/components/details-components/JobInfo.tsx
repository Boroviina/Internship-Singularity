import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp, library} from '@fortawesome/fontawesome-svg-core';
import {
    faLocationDot,
    faBriefcase,
    faUserTie,
    faGlasses,
    faGraduationCap,
    faPencil,
    faCarSide,
    faEarthAmericas
} from '@fortawesome/free-solid-svg-icons';

library.add(faLocationDot, faBriefcase, faUserTie, faGlasses, faGraduationCap
, faPencil, faCarSide, faEarthAmericas);

interface JobInfoProps {
    title: string;
    mainData: string;
    secondaryData?: string;
    icon: IconProp; // the fontawesome icon you want, e.g. "coffee", "location-dot"
}

const JobInfo = ({icon, title, mainData, secondaryData}: JobInfoProps) => {
    return (
        <div className="d-flex align-items-baseline gap-2 p-1" style={{minHeight: "4rem"}}>
            <FontAwesomeIcon icon={icon} size="lg" style={{color: "#7f8593"}}/>
            <div>
                <div className="fw-bold fs-5 mb-1">{title}:</div>
                <span className="p-1 fw-semibold" style={{borderRadius: "3px", background: "#e5e6ee"
                    ,color: "#7f8593"}}>
                    {mainData + (secondaryData ? " - " + secondaryData : "")}
                </span>
            </div>
        </div>
    );
};

export default JobInfo;