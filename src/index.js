//Go find the library 'react' and assign it to the variable 'React' (and same for 'ReactDOM')
import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component. This component should produce some HTML
const App = () => {
  return <div > Hi! < /div>
}

//Take this component's generated HTML and put it on the page (in the DOM)
//Insert an instance of the component (first arg), then put it in a valid HTML spot (the second argument)

ReactDOM.render( < App / > , document.querySelector('.container'));