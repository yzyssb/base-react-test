import React from 'react';
import emitter from '../../ev';

class Home extends React.Component {

    componentDidMount() {
        this.eventEmitter = emitter.addListener("callMe", (res) => {
            console.log(res)
        })
    }

    getMsg() {
        this.eventEmitter = emitter.addListener("callMe", (res) => {
            console.log(res)
        })
    }

    render() {
        return (<div onClick={() => this.getMsg()} > 这是组件1 </div>);
    }
}

export default Home