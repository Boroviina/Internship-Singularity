import React from 'react';
import styles from './jobListingPage.module.css';

const JobListingPage = () => {
    return (
        <body>
        <header className={`${styles['hero']}`}>
            <div className={`text-center ${styles['overlay']}`}>
                <h1 className='display-2 text-light' style={{ paddingTop: '150px'}} >Search for jobs</h1>
            </div>
        </header>
        </body>
    );
};

export default JobListingPage;