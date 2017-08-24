// import react 
import React, {Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';

// import components 
import WeatherCard from './vr/components/WeatherCard';

import WindCloudObject from './vr/components/WindCloudObject';

// querying openweathermap API
const api_key = 'eba77ad8c254e0a32edcc15b5ff2fc45';

const places = [
{
  name:'New York'

}

]


export default class WeatherSimulator_ReactVR extends Component {

  constructor(){
  super();
  this.state = {
     place:'nyc.jpg',
     weatherObject: {
      name: "",
      main:{
        temp: 0
      },
      weather:[
      
      {description: ""}

      ],
      wind:{
       deg:1,
       speed:1
      }


     }
  }
 }

// retrive data from the API
 componentDidMount(){
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${places[0].name}&appid=${api_key}`,
  {
    method:'GET'
  })
  .then(response => response.json())
  .then(json=> this.setState({weatherObject:json}))
  }

// render to page 
  render() {
    return (
      <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
      <Pano source={asset(this.state.place)}/>
      <WeatherCard weatherObject = {this.state.weatherObject}/>
      <WindCloudObject wind={this.state.weatherObject.wind}/>
      </View>
    )
  }
};

AppRegistry.registerComponent('WeatherSimulator_ReactVR', () => WeatherSimulator_ReactVR);
