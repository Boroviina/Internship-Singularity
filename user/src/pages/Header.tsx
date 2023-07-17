import React from "react";

export function Header() {
    return (
        <header
            className={'d-flex flex-wrap align-items-center justify-content-center justify-content-md-between ' +
                'py-3 mb-4 border-bottom'}>
            <div className={'sticky-top'}>
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-lg-3 col-md-2'}>
                            <div>
                                <a href="">
                                    <svg> </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </header>
    )
}