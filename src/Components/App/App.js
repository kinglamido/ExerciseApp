import React, { Component, Fragment } from 'react';
import { Header, Footer} from '../Layouts/Index';
import Exercises from '../Exercises/Exercises'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Exercises/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
