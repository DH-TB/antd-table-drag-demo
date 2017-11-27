import React, { Component } from 'react';
import { Table, Icon } from 'antd';
import 'antd/dist/antd.css';
import 'dragula/dist/dragula.css';
import ReactDragListView from 'react-drag-listview';

class Child extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    title: <Icon className="draggable" type="swap" />,
                    content: 'row_0',
                    key: '1',
                },
                {
                    title: <Icon className="draggable" type="swap" />,
                    content: 'row_1',
                    key: '2',
                },
                {
                    title: <Icon className="draggable" type="swap" />,
                    content: 'row_2',
                    key: '3',
                }
            ],
        };
        this.columns = [
            {
                title: 'id',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'content',
                dataIndex: 'content',
                key: 'content',
            },
            {
                title: 'Operates',
                key: 'operate',
                render:(text,record)=>{
                    return  <a>Drag</a>
                }
            },
        ];
        const that = this;
        this.dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const data = that.state.data;
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                that.setState({
                    data
                });
            },
            handleSelector: "a"
        };
    }
    render() {
        return (
            <div className='margin-t-4'>
                <ReactDragListView {...this.dragProps}>
                    <Table
                        columns={this.columns}
                        pagination={false}
                        dataSource={this.state.data}
                    />
                </ReactDragListView>
            </div>
        );
    }
}
export default Child;
