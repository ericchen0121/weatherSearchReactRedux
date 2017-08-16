import React, { Component} from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/weather_chart';

class WeatherList extends Component {

  renderCityWeather(city_weather) {
    const temps = city_weather.list.map(data => data.main.temp);
    const humidities = city_weather.list.map(data => data.main.humidity)
    const pressures = city_weather.list.map(data => data.main.pressure)

    return (
      <tr key={city_weather.city.id} >
        <td>{city_weather.city.name}</td>
        <td><WeatherChart data={temps} color='red' /></td>
        <td><WeatherChart data={humidities} color='blue'/></td>
        <td><WeatherChart data={pressures} color='green'/></td>
      </tr>
    )
  }

  render() {
    console.log('in weatherlist', this.props.weather);
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th style={{width: '15%'}}>City</th>
            <th style={{width: '25%'}}>Temperature</th>
            <th style={{width: '25%'}}>Humidity</th>
            <th style={{width: '25%'}}>Pressure</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderCityWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList)
