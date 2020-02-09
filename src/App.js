import React from 'react';
import Header from "./header/header";
import headImg from "./head-img.jpg";
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <main className="main">
        <div className="img-container">
          <img src={headImg} alt="head-img"></img>
        </div>
        <section className="post-list">
          <div className="post-list-title">
            最新发布
          </div>
          <div className="post-list-content">

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
