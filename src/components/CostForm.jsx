import React from 'react';


export default class CostForm extends React.Component {


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.props.onHandleChange(this.refs.totalCost.value);
    }

    render() {
        let {totalCost} = this.props;
        return (
            <div className="ui form">
                <div className="inline fields">
                    <div className="five wide field">
                        <label>Бюджет</label>
                        <input type="text" placeholder="Бюджет..." ref="totalCost" value={totalCost} onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        );
    }

}
