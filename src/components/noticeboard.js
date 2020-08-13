import React from 'react';
import './noticeboard.css'

const boardData = [
    {
      'id':1,
      'title' : "상찡아",
        'content' : "보고싶구나",
          'time' : "2020-08-13",
            'author' : "팡키"
    },
    {
      'id':2,
      'title' : "세찡아",
        'content' : "만지고싶구나",
          'time' : "2020-08-13",
            'author' : "팡키"
    },
    {
      'id':3,
      'title' : "지혐아",
        'content' : "뜯고싶구나",
          'time' : "2020-08-13",
            'author' : "팡키"
    }
]

class noticeboard extends React.Component {
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
                boardData.map((data)=>{
                    return(
                    <Board_Tbody 
               key={data.id}
               title={data.title}
               content={data.content}
               time={data.time}
               author={data.author}/>  
                )})
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