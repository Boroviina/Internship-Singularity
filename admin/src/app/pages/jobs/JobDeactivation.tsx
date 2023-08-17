import React, {useState, useEffect} from 'react';
import {Badge} from 'react-bootstrap';

export function JobDeactivation(props) {

    const [badgeActive, setBadgeActive] = useState(false);

    useEffect(() => {
        const currentDate = new Date();
        console.log("Current date", currentDate);
        console.log("App deadline", props.date);
        const appDeadline=new Date(props.date);
        if (currentDate < appDeadline)
            setBadgeActive(true);
        else
            setBadgeActive(false);
    }, [props.date])


    return <>

        {badgeActive ? <Badge bg="success">Active</Badge> : <Badge bg="danger">Expired</Badge>}

    </>
}