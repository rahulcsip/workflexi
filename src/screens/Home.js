import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate("Customer")} style={{height:100,width:200,backgroundColor:'#000',elevation:8,justifyContent:"center",alignItems:'center',marginBottom:50}}>
<Text style={{color:'#fff',fontSize:30}}>Customer</Text>
               </TouchableOpacity>


               <TouchableOpacity 
               onPress={()=>this.props.navigation.navigate("WorkHistory")}
               style={{height:100,width:200,backgroundColor:'#000',elevation:8,justifyContent:"center",alignItems:'center',marginBottom:50}}>
<Text style={{color:'#fff',fontSize:30}}>Work History</Text>
               </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
