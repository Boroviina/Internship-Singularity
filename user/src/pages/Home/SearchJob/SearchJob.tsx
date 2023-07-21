import React from "react";
import classes from './SearchJob.module.css'
import background from './bgr.jpg'
import styles from '../Carousel/Carousel.module.css'

export function SearchJob() {
    return <div className={'card position-relative  '}>
        <div className={`bgi-no-repeat bgi-position-center d-flex justify-content-end ${styles.jobSearchHeigh}`}
             style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <div className={'container d-flex flex-column justify-content-end mt-5'}>
                <div className={'row d-flex justify-content-end'}>
                    <h1 className={'display-1 fw-bold'}>Find the <br/> most exciting <br/> startup jobs</h1>
                </div>
                <div className={'col'}>
                    <div className={' row'}>
                        <div className={'col-xl-8'}>
                            <form action="" className={'input-group d-flex flex-column flex-sm-row mt-5'}>
                                <input type="text" placeholder={'Job title or keyword'} tabIndex={0}
                                       className={'form-control w-auto mt-sm-0 col-sm-4 col-12 '}/>
                                <select className="form-select mt-1 mt-sm-0 w-auto col-12 col-sm-4" id="floatingSelectDisabled"
                                        aria-label="Floating label disabled select example">
                                    <option selected>Choose region</option>
                                    <option value="1">Balcan countries</option>
                                    <option value="2">Europe</option>
                                    <option value="3">Other world countries</option>
                                </select>
                                <button className={`mt-1 mt-sm-0 col-12 col-sm-2 ${classes.buttonStyle}`}>
                                    Find Job
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}