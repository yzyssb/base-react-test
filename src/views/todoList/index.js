import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {

    render() {
        return (
            <div>
                <input value={this.props.input} onChange={this.props.changeInputValue} />
                <button onClick={this.props.addItem}>提交</button>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li key={index} onClick={()=>this.props.deleteItem(index)}>{ item }</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        input: state.inputValue,
        list: state.list
    }
}

const mapDispacthToProps = dispatch => {
    return {
        changeInputValue(e) {
            dispatch({
                type: 'change_input_value',
                value: e.target.value
            })
        },
        addItem(){
            dispatch({type:'add_item'})
        },
        deleteItem(index){
            dispatch({
                type: 'delete_item',
                value: index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(TodoList);