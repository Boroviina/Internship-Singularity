import React from "react";
import classes from './SearchJob.module.css'
import background from './bgr.jpg'

export function SearchJob() {
    return <div className={'card position-relative my-1 '}>
        <div className={'bgi-no-repeat bgi-position-center d-flex justify-content-end '}
             style={{backgroundImage: `url(${background})`, height: '50rem', backgroundSize: 'cover'}}>
            <div className={'container d-flex flex-column justify-content-end mt-5'}>
                <div className={'row d-flex justify-content-end'}>
                    <h1 className={'display-1 fw-bold'}>Find the <br/> most exciting <br/> startup jobs</h1>
                </div>
                <div className={'col'}>

                    <div className={'row'}>
                        <div className={'col-xl-8'}>
                            <form action="" className={'input-group d-flex flex-row mt-5'}>
                                <input type="text" placeholder={'Job title or keyword'} tabIndex={0}
                                       className={'form-control col-4 '}/>
                                <select className="form-select" id="floatingSelectDisabled"
                                        aria-label="Floating label disabled select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}