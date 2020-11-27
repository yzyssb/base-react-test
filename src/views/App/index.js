import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { getCategory } from '../../api/home'
import { Button, DatePicker, Space, message, Table } from 'antd';
import emitter from '../../ev';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
            ],
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                },
            ],

            msg:''
        }
    }

    jumpPage() {
        this.props.history.push({
            pathname: '/todoList',
            query: {
                a: 1
            }
        })
    }

    componentDidMount() {
        // fetch('https://yangzhiyuan.top/tp5/public/getCategory', {
        //     method:'POST',
        //     headers:{'Content-Type': 'application/json'},
        //     body:JSON.stringify({a:1})
        // }).then(res=>res.json()).then((res) => {
        //     console.log(res);
        // }, function (err) {
        //     console.log(err)
        // })
        getCategory({ a: 1 }).then(res => {
            console.log(res)
            message.success('请求成功！')
        })
    }

    componentWillUnmount(){
        emitter.removeListener("callMe",()=>{})
    }

    onChange(date, dateString) {
        console.log(date, dateString);
    }

    render() {
        return (
            <div>
                <Link to="/home">Home</Link>
                <Link to="/mine">Mine</Link>
                <Link to="/todoList">TodoList</Link>
                <p onClick={() => this.jumpPage()}>这是组件App</p>
                <Button type="primary">Button{this.state.msg}</Button>
                <Space direction="vertical">
                    <DatePicker onChange={() => this.onChange()} />
                    <DatePicker onChange={() => this.onChange()} picker="week" />
                    <DatePicker onChange={() => this.onChange()} picker="month" />
                    <DatePicker onChange={() => this.onChange()} picker="quarter" />
                    <DatePicker onChange={() => this.onChange()} picker="year" />
                </Space>
                <Table dataSource={this.state.dataSource} columns={this.state.columns} />
            </div>
        );
    }
}

export default withRouter(App)