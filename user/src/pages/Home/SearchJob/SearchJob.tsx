import React from "react";
import background from './bgr.jpg'
import styles from '../ResponsiveControl.module.css'
import btnStyle from '../GeneralButton.module.css'
import {useAuth} from "../../../modules/auth";
import {useNavigate} from "react-router-dom";
import Search from "../../find-jobs/components/Search";
import SearchBar from "../../find-jobs/components/SearchBar";

export function SearchJob() {
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate();
    const FindJobClickHandle = (title, location) => {
        navigate('/find-job')
    };

    const submitAction = currentUser ? FindJobClickHandle : () => {navigate('/auth/login')};

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
                                <SearchBar onSearch={submitAction}/>
                            {/*<form action="" className={'input-group d-flex flex-column flex-md-row mt-5'}>*/}
                            {/*    <input type="text" placeholder={'Job title or keyword'} tabIndex={0}*/}
                            {/*           className={'form-control w-auto my-1  mt-md-0 col-md-4 col-12 '}/>*/}
                            {/*    <select className="form-select form-control w-auto my-1 mt-md-0  col-12 col-md-4"*/}
                            {/*            id="floatingSelectDisabled">*/}
                            {/*        <option value="0">Choose region</option>*/}
                            {/*        <option value="1">Balcan countries</option>*/}
                            {/*        <option value="2">Europe</option>*/}
                            {/*        <option value="3">Other world countries</option>*/}
                            {/*    </select>*/}
                            {/*    {currentUser ? (<button*/}
                            {/*        className={`my-1 btn btn-pink mt-md-0 col-12 col-md-2 overflow-visible text-nowrap`}*/}
                            {/*        style={{height: '50px'}} onClick={FindJobClickHandle}>*/}
                            {/*        Find Job*/}
                            {/*    </button>) : (<button*/}
                            {/*        className={`my-1 btn btn-pink mt-md-0 col-12 col-md-2 overflow-visible text-nowrap`}*/}
                            {/*        style={{height: '50px'}} onClick={()=>navigate('/auth/login')}*/}
                            {/*   >*/}
                            {/*        Find Job*/}
                            {/*    </button>)}*/}
                            {/*</form>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}