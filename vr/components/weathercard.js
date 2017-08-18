import React , {Component} from 'react';

import { View , Text , Image, StyleSheet } from 'react-vr';

export default class WeatherCard extends Component{

render(){

 console.log('WeatherCard props' , this.props)
   return(

   	<View style={styles.weathercard}>
     <Text style = {styles.weatherText}> { this.props.weatherObject.name} </Text>
      <Text style = {styles.weatherText}>Current Weather: {this.props.weatherObject.weather[0].description} </Text>
       <Text style = {styles.weatherText}>Temprature: {this.props.weatherObject.main.temp/10*2.5}°F </Text>
       <Text style = {styles.weatherText}>Wind Speed: {this.props.weatherObject.wind.speed*2}mph </Text>
   	</View>

   	)
  }

}

const styles = StyleSheet.create({
  weathercard:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'#fff',
   opacity:0.8,
   borderRadius:0.5,
   borderColor:'#000',
   borderWidth:0.08,
   padding:0.5,
   layoutOrigin :[-0.5 , 0 ],
   transform: [
    {translate:[-3,0,-7]}
   ]

  },
  weatherText:{

  	textAlign:'center',
  	fontSize:0.3,
  	color:'#000'
  }




})