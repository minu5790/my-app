import React from 'react';
import Noticeboard from './components/noticeboard';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <h1>NoticeBoard</h1>
        </nav>
        <main>
        <Noticeboard></Noticeboard>           
          
        </main>
      </>
    );
  }
}

export default App;
