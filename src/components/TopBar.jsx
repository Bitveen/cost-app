import React from 'react';
import { browserHistory } from 'react-router';

const TopBar = (props) => {
    return (
        <div className="ui top fixed menu top-bar-menu">
            <div className="item">
                Бюджет: {props.currentCost} / {props.totalCost} руб.
            </div>
            <div className="right menu">
                <div className="item">
                    <button type="button" onClick={() => {
                            props.onRemoveList(props.listId);
                            browserHistory.push('/');
                        }} className="ui button red">Удалить список</button>
                </div>
            </div>
        </div>
    );
};
export default TopBar;
