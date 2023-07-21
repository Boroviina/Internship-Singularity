import React from "react";
import classes from '../ResponsiveControl.module.css'
export function CarouselCustom(){
    return  <div id="carouselJobIndicators" className={`${classes.height} carousel slide`} data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselJobIndicators" data-bs-slide-to="0"
                    className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselJobIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselJobIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselJobIndicators" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselJobIndicators" data-bs-slide-to="4"
                    aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselJobIndicators" data-bs-slide-to="5"
                    aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner" >
            <div className="carousel-item  active" >
                <img src={require(`./CarouselPhotos/job-g9c8b36671_1280.jpg`)} className={'w-100  img-fluid '} height={'auto'}
                     alt="cleaning"/>

            </div>
            <div className="carousel-item" >
                <img src={require(`./CarouselPhotos/it.jpg`)} className="d-block w-100 "
                     alt="it industry"/>
            </div>
            <div className="carousel-item"  >
                <img src={require(`./CarouselPhotos/teacher.jpg`)} className="d-block w-100" alt="teacher"/>
            </div>
            <div className="carousel-item"  >
                <img src={require(`./CarouselPhotos/welder.jpg`)} className="d-block w-100" alt="teacher"/>
            </div>
            <div className="carousel-item" >
                <img src={require(`./CarouselPhotos/service.jpg`)} className="d-block w-100" alt="teacher"/>
            </div>
            <div className="carousel-item"  >
                <img src={require(`./CarouselPhotos/fireman.jpg`)} className="d-block w-100" alt="teacher"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button"
                data-bs-target="#carouselJobIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button"
                data-bs-target="#carouselJobIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}