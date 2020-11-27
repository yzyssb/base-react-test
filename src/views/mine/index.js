import React from 'react';
import { connect } from 'react-redux';
import emitter from '../../ev';

class Mine extends React.Component {
    constructor(props){
        super(props)
    }

    divClick(){
        emitter.emit("callMe",parseInt(Math.random()*100))
    }

    render() {
        return (
        <div onClick={()=>this.divClick()}>这是组件2 {this.props.inputValue}</div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        inputValue:state.inputValue
    }
}

export default connect(mapStateToProps)(Mine)