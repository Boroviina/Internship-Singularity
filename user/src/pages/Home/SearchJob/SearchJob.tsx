import React from "react";
import classes from './SearchJob.module.css'
import background from './bgr.jpg'
import styles from '../ResponsiveControl.module.css'
import btnStyle from '../GeneralButton.module.css'

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
                            <form action="" className={'input-group d-flex flex-column flex-md-row mt-5'}>
                                <input type="text" placeholder={'Job title or keyword'} tabIndex={0}
                                       className={'form-control w-auto my-1  mt-md-0 col-md-4 col-12 '}/>
                                <select className="form-select w-auto my-1 mt-md-0  col-12 col-md-4" id="floatingSelectDisabled">
                                    <option selected>Choose region</option>
                                    <option value="1">Balcan countries</option>
                                    <option value="2">Europe</option>
                                    <option value="3">Other world countries</option>
                                </select>
                                <button className={`my-1 mt-md-0 col-12 col-md-2 overflow-visible text-nowrap ${btnStyle.filledButton}`}>
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