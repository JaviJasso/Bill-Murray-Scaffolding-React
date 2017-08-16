import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import NavBar from './NavBar.js';
import Section from './Section.js';


class Form extends Component {
  render() {
    return (
      <form className="example-form">
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Example label</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Another label</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
          </form>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <nav className="fixed-footer navbar  navbar-light bg-faded">
        <a className="navbar-brand" href="#">Footer Stuff...</a>
      </nav>
    )
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
