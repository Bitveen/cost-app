import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

export default class MenuList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let { lists } = this.props;
        let nodes = null;

        if (!lists.length) {
           nodes = (<div className="item">
               <h2 className="ui icon header">
                   <i className="list layout icon" />
                   <div className="content">Списки отсутствуют
                       <div className="sub header">Для создания списка нажмите на кнопку выше.</div>
                   </div>
               </h2>
           </div>);
        } else {
            nodes = lists.map((item) => {
                return <Link key={item.id} to={`/list/${item.id}`} activeClassName="active" className="item">{item.title}</Link>;
            });
        }


        return (
            <div>
                {nodes}
            </div>
        );

    }

}

MenuList.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired
};