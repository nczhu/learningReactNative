import React, { Component } from 'react'; // responsible for react.createelement
// same as const Component = React.Component

// 1. Class based component
class SearchBar extends Component {
	// STATE constructor. OOP style
	// is only relevant for individual component instances.
	constructor(props) {
		super(props);
		this.state = { term: '' };   //creates a state, only place for this syntax
		// to change it, it is this.setState({})
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					// makes input a controlled component
					value = {this.state.term}  
					// value only changes when the state changes
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);  //triggers the callback
	}
}

// 2. Functional component
// const SearchBar = () => {
//  return <input />;   
// }

// const foo = 5;
// export default foo; would export 5
export default SearchBar;


// STATE
// whenever components state changes, it & children rerender
