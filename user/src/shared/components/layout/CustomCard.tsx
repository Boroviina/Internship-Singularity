import React from 'react';
import {WithChildren} from "../../../helpers";

type CustomCardProps = {
    className?: string
    width?: string
}

export const CustomCard: React.FC<CustomCardProps & WithChildren> = (props) => {
    const {
        className,
        width,
        children,
    } = props

    return (
        <div className={`mx-auto ${className && className} `} style={width && {width: width}}>{children}</div>
    );
}