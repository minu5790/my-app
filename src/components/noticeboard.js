import React from 'react';
import './noticeboard.css'

class noticeboard extends React.Component{
    render(){
        return(
        <div className="noticeboard">
            <table  className="noticeboard__table">
                <tr>
                <th className="board__title">제목</th>
                <th className="board__content">내용</th>
                <th className="board__time">날짜</th>
                <th className="board__author">작성자</th>
                </tr>
                <tr>
                    <td>test..</td>
                    <td>내용입니다...</td>
                    <td>날짜입니다..</td>
                    <td>홍길동</td>
                </tr>
            </table>
            <div className="noticeboard__btn">
        <button className="btn__new">New</button>
    </div> 
        </div>
        
        )
    }
}


export default noticeboard;