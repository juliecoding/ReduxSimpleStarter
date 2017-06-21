import React, { Component } from 'react' //syntactic sugar

//This is a functional component because it's literally a function.
class SearchBar extends Component { //Functional components do not have state; only class-based components do
  constructor(props) { //This is how we initialize state. All JS classes have a special function called constructor. The constructor function is the only function called automatically whenever a new instance of the class is created.
    super(props); //Component itself has a constructor method. We can call the parent method on the class by calling super.
    //Each class-based component has its own copy of state.
    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} /> {/*For virtually the rest of the app, we use this.setState to change state. */} {/* Value of the input : {this.state.term} Wrap JS variables with curly braces */}
      </div>
    )
  } // onInputChange(event) {// Done as an arrow function above, but name created like so: generally 'handle'
  // or 'on', the name of the element you're watching for an event, the name of
  // the event itself   console.log(event.target.value); }
}

export default SearchBar

/*Process Flow:

1. the value of <input> (this.state.term) is initially ''

...Waiting until users type something and when they do...

2. Event handler(function) is called (* the users did not change <input> value! They only triggered an event *)

3. Event handler runs, calling setState() and updating this.state.term to be whatever users are typing (event.target.value)

...<input> value should still be '' at this point... (am I correct?)

4. The component immediately re-renders, calling render()

5. The <input> value is updated to the new this.state.term*/