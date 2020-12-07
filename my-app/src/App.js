import React, { Component } from 'react';
import WeatherWidget from './components/WeatherWidget';

class App extends Component {
	state = {
		defaultCity: 'Copenhagen',
		city: '',
		newCity: '',
		test: 'test'
	};

	updateCity = async city => {
		const response = await fetch(`/api/city?newCity=${encodeURIComponent(city)}`);
		const result = await response.json();

		this.setState({ city: result.city });
	};

	componentDidMount = () => {
		this.updateCity(this.state.defaultCity);
	};

	handleSubmit = e => {
		console.log(e);
		e.preventDefault();

		this.updateCity(this.state.newCity);
	};

	onChangeForm = e => {
		let newCity = this.state.newCity;
		newCity = e.target.name === 'city' ? e.target.value : '';
		this.setState({ newCity });
	};

	render() {
		return (
			<div>
				<WeatherWidget
					city={this.state.city}
					onChangeForm={this.onChangeForm}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default App;
