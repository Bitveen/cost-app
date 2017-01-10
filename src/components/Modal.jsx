import React from 'react';
import { Link, browserHistory } from 'react-router';


export default class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let { user } = this.props;

        let firstName = this.refs.firstName.value;
        let lastName = this.refs.lastName.value;
        let middleName = this.refs.middleName.value;
        let cost = this.refs.cost.value;

        if (![firstName, lastName, middleName, cost].every(item => item)) {
            return;
        }

        if (user) {
            this.props.updateUser();
        } else {
            this.props.addUser({
                firstName,
                lastName,
                middleName,
                cost
            }, parseInt(this.props.params.listId, 10));
            browserHistory.push(`/list/${this.props.params.listId}`);
        }
    }


    render() {

        let { user, params } = this.props;

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
                            (<button className="ui button" type="submit">Сохранить</button>):
                            (<button className="ui button" type="submit">Создать</button>)
                        }
                        <Link className="ui button" to={`/list/${params.listId}`}>Закрыть</Link>
                    </form>
                </div>

                <div className="my-modal-overlay"></div>
            </div>

        );
    }



};
