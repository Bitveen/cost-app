import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { showAddList, hideAddList, addList } from 'actions';


const mapStateToProps = (state) => {
    return {
        usersLists: state.usersLists,
        addingList: state.addingList
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        showAddList: () => dispatch(showAddList()),
        hideAddList: () => dispatch(hideAddList()),
        addList: list => dispatch(addList(list))
    };
};





class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.createList = this.createList.bind(this);
    }

    componentDidUpdate() {
        let listTitleInput = this.refs.listTitle;
        if (listTitleInput) {
            this.refs.listTitle.focus();
        }
    }


    createList(e) {

        if (e.which !== 13) {
            return;
        }

        let listTitle = this.refs.listTitle.value;
        if (!listTitle) {
            return;
        }

        this.props.addList({title: listTitle});
        this.props.hideAddList();

    }



    render() {

        let {usersLists, addingList, showAddList} = this.props;

        return (
            <div className="ui left fixed large vertical menu list-control-menu">
                <div className="item">
                    <button className="ui basic button fluid" onClick={showAddList}>
                        <i className="icon plus" />
                        Создать список
                    </button>
                </div>
                <div className="item">
                    <h4>Списки пользователей</h4>
                    <div className="menu">
                        {usersLists.map((list, i) => {
                            return <Link to={`/list/${list.id}`} className="item" key={i} activeClassName="active">{list.title}</Link>
                        })}
                    </div>
                </div>

                {
                    addingList && (
                        <div className="item">
                            <div className="ui input">
                                <input type="text" placeholder="Название списка..." onKeyPress={this.createList} ref="listTitle" />
                            </div>
                        </div>
                    )}

            </div>
        );
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
