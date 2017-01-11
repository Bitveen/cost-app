import React from 'react';
import { Link, browserHistory } from 'react-router';


export default class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let { user, currentCost, params: { listId } } = this.props;

        let firstName = this.refs.firstName.value;
        let lastName = this.refs.lastName.value;
        let middleName = this.refs.middleName.value;
        let cost = parseInt(this.refs.cost.value, 10);

        listId = parseInt(listId, 10);

        if (![firstName, lastName, middleName].every(item => item)) {
            return;
        }

        if (user) {
            this.props.updateUser(Object.assign({}, user, {
                firstName,
                lastName,
                middleName,
                cost
            }));
            let newCost = (currentCost - user.cost) + cost;
            this.props.updateCurrentCost(newCost, listId);
        } else {
            this.props.addUser({
                firstName,
                lastName,
                middleName,
                cost
            }, listId);

            this.props.updateCurrentCost((currentCost + cost), listId);
        }

        browserHistory.push(`/list/${listId}`);
    }


    render() {

        let { user, currentCost, params: { listId } } = this.props;
        listId = parseInt(listId, 10);
        return (
            <div>
                <div className="my-modal">
                    <h4>{user ? 'Редактирование' : 'Новый пользователь' }</h4>
                    <form className="ui form" onSubmit={this.handleFormSubmit}>
                        <div className="field">
                            <label>Фамилия</label>
                            <input type="text" name="last-name" ref="lastName" placeholder="Фамилия" defaultValue={user ? user.lastName : ''} />
                        </div>
                        <div className="field">
                            <label>Имя</label>
                            <input type="text" name="first-name" ref="firstName" placeholder="Имя" defaultValue={user ? user.firstName : ''} />
                        </div>
                        <div className="field">
                            <label>Отчество</label>
                            <input type="text" name="middle-name" ref="middleName" placeholder="Отчество" defaultValue={user ? user.middleName : ''} />
                        </div>
                        <div className="field">
                            <label>Премия</label>
                            <input type="text" name="cost" ref="cost" placeholder="Премия" defaultValue={user ? user.cost : 0} />
                        </div>
                        {user ?
                            (<span>
                                <button className="ui button" type="submit">Сохранить</button>
                                <button className="ui button" type="button" onClick={() => {
                                        this.props.updateCurrentCost((currentCost - user.cost), listId);
                                        this.props.deleteUser(user.id);
                                        browserHistory.push(`/list/${listId}`);
                                    }}>Удалить</button>
                            </span>):
                            (<button className="ui button" type="submit">Создать</button>)
                        }
                        <Link className="ui button" to={`/list/${listId}`}>Закрыть</Link>
                    </form>
                </div>

                <div className="my-modal-overlay"></div>
            </div>

        );
    }



};
