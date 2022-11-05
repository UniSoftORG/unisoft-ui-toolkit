import React from "react";

const Skeleton = (props: { font?: number, width?: number, height?: number, appearence?: string }) => {

    const divStyle = {
        width: props.width ?? 300,
        height: props.font ? props.font : props.height ?? 22,
        margin: '2px 0 4px 0',
        borderRadius: 10
    };

    return (<div style={divStyle} className={props.appearence}/>);
};

export default Skeleton;
