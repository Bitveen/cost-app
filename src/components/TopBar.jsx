import React from 'react';


const TopBar = (props) => {
    return (
        <div className="ui top fixed menu top-bar-menu">
            <div className="item">
                Бюджет: {props.currentCost} / {props.totalCost} руб.
            </div>
            <div className="right menu">
                <div className="item">
                    <button type="button" className="ui button red">Удалить список</button>
                </div>
                <div className="item">
                    <div className="ui icon input">
                        <input type="text" placeholder="Фильтр..." />
                        <i className="search icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TopBar;
