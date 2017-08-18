import React , {Component} from 'react';

import { Model , View , asset, Animated } from 'react-vr';

export default class WindCloudObject extends Component{

	constructor(){
     super();

     this.state = {

     	xValue: new Animated.Value(100)
     }

     setInterval(() => this.animateCloud(), 5000)

	}

	componentDidMount(){
     
     this.animateCloud();

	}


	animateCloud(){
      Animated.timing(this.state.xValue,{
       toValue:-400,
       duration:30000

      }).start();

	}
 render(){
   return (
    
    <Animated.View
    style= {{
    
    transform:[
     { translate: [0, 25, -150]},
     {rotateX: -90},
     {rotateZ:this.props.wind.deg},
     {translateX:this.state.xValue}
    ]
    }}
    >
    <Model 
    scale={0.01}
    source={{
    	obj: asset('multi_clouds.obj')
    }}/>
    </Animated.View>
  
   	)

 }


}