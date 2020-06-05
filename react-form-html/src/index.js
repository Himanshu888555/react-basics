import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ContactForm from './ContactForm';


class App extends Component{

  state={ };

render(){

  return (
    <div className="container">
      <h1 className="alert alert-info"> Usinf "refs" (Uncontrolled Components) </h1>
    
    <div className="row">
      <div className="col">
       
       <ContactForm/>

      </div>

    </div>
    
    </div>

  );
}

}

ReactDOM.render(<App/>,document.getElementById('root'));