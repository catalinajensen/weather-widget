import React from 'react';
import './WeatherWidget.css';

const degToCompass = degree => {
	const value = parseInt(degree / 22.5 + 0.5);
	const compass = [
		'N',
		'NNE',
		'NE',
		'ENE',
		'E',
		'ESE',
		'SE',
		'SSE',
		'S',
		'SSW',
		'SW',
		'WSW',
		'W',
		'WNW',
		'NW',
		'NNW'
	];
	return compass[value % 16];
};

const WeatherWidget = ({ city, onChangeForm, handleSubmit }) => (
	<div className="widget weather-container">
		<div className="panel panel-info">
			<div className="panel-heading">
				Weather in <b>{city && city.name ? city.name : ''}</b>
			</div>
			<ul className="list-group">
				<li className="list-group-item">
					Temperature: <b>{city && city.main ? city.main.temp : ''}°C</b>
				</li>
				<li className="list-group-item">
					Humidity: <b>{city && city.main ? city.main.humidity : ''}</b>
				</li>
				<li className="list-group-item">
					Wind:
					{city && city.wind ? (
						<b>
							{city.wind.speed} m/s {degToCompass(city.wind.deg)}
						</b>
					) : (
						''
					)}
				</li>
				<li className="list-group-item">
					<form className="form-inline" onSubmit={e => handleSubmit(e)}>
						<div className="form-group">
							<input
								type="text"
								onChange={e => onChangeForm(e)}
								className="form-control"
								name="city"
								id="city"
								placeholder="City"
							/>
						</div>
						<button type="submit" className="btn btn-default">
							Search
						</button>
					</form>
				</li>
			</ul>
		</div>
	</div>
);

export default WeatherWidget;
