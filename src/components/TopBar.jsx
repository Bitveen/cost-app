import React from 'react';


const TopBar = (props) => {
    return (
        <div className="ui top fixed menu top-bar-menu">
            <div className="item">
                Бюджет: 0 / {props.totalCost} руб.
            </div>
        </div>
    );
};
export default TopBar;
