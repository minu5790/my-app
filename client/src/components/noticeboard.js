import React from 'react';
import './noticeboard.css'

class noticeboard extends React.Component {
    

    state = {
        boardData: ""
    }
    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
        this
            .callApi()
            .then(res => this.setState({boardData: res}))
            .catch(err => console(err));
    }
    callApi = async () => {
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
                    <tbody>
                        {
                            this.state.boardData
                                ? this
                                    .state
                                    .boardData
                                    .map((data) => {
                                        return (
                                            <Board_Tbody
                                                key={data.id}
                                                title={data.title}
                                                content={data.content}
                                                date_={data.date_}
                                                author={data.author}/>
                                        )
                                    })
                                : <tr>
                                        <td>로딩중</td>
                                    </tr>
                        }
                    </tbody>
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

            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.content}</td>
                <td>{this.props.date_}</td>
                <td>{this.props.author}</td>
            </tr>

        )
    }
}

export default noticeboard;