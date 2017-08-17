import React, {Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';

const api_key = 'eba77ad8c254e0a32edcc15b5ff2fc45';

class WeatherSimulator_ReactVR extends Component {

  constructor(){
  super();
  this.state = {
     place:'lombard-vr.jpg',
     weatherObject: {}
  }
 }

 componentDidMount(){
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${api_key}`,{
    method:'GET'
  })
  .then(response => response.json())
  .then(json=> this.setState({weatherObject:json}));
  }

  render() {
    return (
      <View>
      <Pano source={asset(this.state.place)}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('WeatherSimulator_ReactVR', () => WeatherSimulator_ReactVR);
