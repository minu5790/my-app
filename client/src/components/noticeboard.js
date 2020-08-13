import React from 'react';
import './noticeboard.css'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class noticeboard extends React.Component {
    
    state = {
        boardData:""
    }
    componentDidMount(){
        this.callApi()
            .then(res => this.setState({boardData:res}))
            .catch(err=>console(err));
    }
    callApi =async()=>{
        const response = await fetch('/api/noticeboard');
        const body = await response.json();
        return body;
    }
    render() {
        return (
            <section className="noticeboard">
                <table className="noticeboard__table">
                    <thead>
                        <tr>
                            <th className="board__title">제목</th>
                            <th className="board__content">내용</th>
                            <th className="board__time">날짜</th>
                            <th className="board__author">작성자</th>
                        </tr>
                    </thead>
                    {
                        this.state.boardData ? 
                            this.state.boardData.map((data) => {
                            return (
                                <Board_Tbody
                                    key={data.id}
                                    title={data.title}
                                    content={data.content}
                                    time={data.time}
                                    author={data.author} />
                            )
                        }) :""
                    }
                </table>
                <div className="noticeboard__btn">
                    <button className="btn__new">New</button>
                </div>
            </section>

        )
    }
}


class Board_Tbody extends React.Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>{this.props.title}</td>
                    <td>{this.props.content}</td>
                    <td>{this.props.time}</td>
                    <td>{this.props.author}</td>
                </tr>
            </tbody>
        )
    }
}

export default noticeboard;