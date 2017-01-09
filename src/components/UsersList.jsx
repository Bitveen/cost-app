import React from 'react';
import { Link } from 'react-router';



const UsersList = ({ listId, users }) => {

    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Премия</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, i) => {
                    return (
                        <tr key={i}>
                            <td>{user.lastName}</td>
                            <td>{user.firstName}</td>
                            <td>{user.middleName}</td>
                            <td>{user.cost} руб.</td>
                            <td className="selectable">
                                <Link to={`/list/${listId}/user/${user.id}/edit`}>Редактировать</Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};



export default UsersList;
