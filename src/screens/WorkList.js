import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity,FlatList,ScrollView,Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import profile from '../utility/Index';
import { Switch } from 'react-native-switch';

const data = [
{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtMEw4dDkkwQm5Hm_04oDFQ7PlW_HDo_qNw&usqp=CAU",
one:"KA 36 MJ 236",
two:"Kaka Apartment",
three:"Raju",
status:false

},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-k6ttlnJJP7aF8ZZy-81pux2u0QaXin1uQ&usqp=CAU",
  one:"KA 36 MJ 456",
  two:"XYZ Apartment",
  three:"Abcdef",
  status:true
  
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRohmbA9WDVNuTf_HxO2LSeA6PvGIFbZzj-g&usqp=CAU",
    one:"KA 36 MJ 116",
    two:"Three Apartment",
    three:"Rohit",
    status:true
    
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtMEw4dDkkwQm5Hm_04oDFQ7PlW_HDo_qNw&usqp=CAU",
      one:"KA 36 MJ 112",
      two:"Relience Apartment",
      three:"Rahul",
      status:true
      
      },
      {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01NgcL0QvzB5_AxIQk-rCUv6yx2ncMCzs0Q&usqp=CAU",
        one:"KA 36 MJ 110",
        two:"Tata Apartment",
        three:"Mamu",status:false
        
        },
        {
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtMEw4dDkkwQm5Hm_04oDFQ7PlW_HDo_qNw&usqp=CAU",
          one:"KA 36 MJ 236",
          two:"Abc Apartment",
          three:"Dost"
          
          },


]


export default class WorkHistory extends Component {


renderItems=(data)=>{
   
    const {index,item} = data
    const {image,one,two,three,status} = item
    console.warn(item)
    return(
        <View
        style={{marginVertical:5,flexDirection:'row',borderBottomWidth:1,paddingBottom:5}}
        key={index} 
    
        >

<View style={{flex:2,backgroundColor:"",paddingVertical:10,justifyContent:'center',alignItems:'center'}}>
  <Image
  source={{uri:image}}
  style={{height:50,width:50,borderRadius:500}}
  />
</View>
<View style={{flex:8}}>
  <View style={{flex:5,backgroundColor:"",flexDirection:'row'}}>
<View style={{flex:1}}>
  <Text style={{fontSize:16,fontWeight:"bold",color:"#C38A68"}}>{one}</Text>
  <Text style={{fontWeight:"bold"}}>{two}</Text>
  <Text style={{color:"blue",fontWeight:"bold",fontSize:17 }}>{three}</Text>
</View>

<View style={{flex:1,backgroundColor:'',}}>
<View style={{flexDirection:"row",justifyContent:'space-around',}}>
<View style={{height:20,width:20,borderRadius:100,backgroundColor:'green'}}/>
<Switch
    value={status}
    onValueChange={(val) => console.log(val)}
    circleSize={20}
    barHeight={20}
    circleBorderWidth={3}
  
    
  />
</View>
<Text style={{fontSize:15,textAlign:"center",marginVertical:5}}>12 / 01/ 2021</Text>
</View>
  </View>
  <View style={{flex:1,flexDirection:'row',borderBottomWidth:0,paddingBottom:15,marginHorizontal:0,borderBottomColor:"#757575",paddingTop:5}}>
<View style={{flex:2,borderRightWidth:1,flexDirection:'row',justifyContent:"space-around",borderRightWidth:1,alignItems:'center'}}>
<MaterialIcons
name="access-alarm"
size={25}
/>
<Text style={{fontSize:16,fontWeight:'bold'}}>7 AM - 9 AM</Text>
</View>
   
<View style={{flex:1.5,borderRightWidth:1,flexDirection:'row',justifyContent:"space-around",borderRightWidth:1,alignItems:'center'}}>
<MaterialIcons
name="zoom-out-map"
size={25}
/>
<Text style={{fontSize:16,fontWeight:'bold'}}>1/03</Text>
</View>
<View style={{flex:1.5,borderRightWidth:1,flexDirection:'row',justifyContent:"space-around",borderRightWidth:1,alignItems:'center'}}>
<MaterialIcons
name="zoom-out-map"
size={25}
/>
<Text style={{fontSize:16,fontWeight:'bold'}}>3/12</Text>
</View>
   
    </View>
    
  </View>
</View>
      
    )
}

  render() {
    return (
      <View showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '',
            }}>
           <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
           <Icon name="angle-left" size={30} />
           </TouchableOpacity>
          </View>
          <View
            style={{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginRight: 20}}>
              Todays Activities
            </Text>
          </View>
        </View>

   <View style={{flexDirection:'row',justifyContent:"space-around",borderBottomWidth:1,paddingBottom:10,marginHorizontal:10}}>
     <Text style={{fontSize:19,fontWeight:"bold"}}>Cleaners</Text>
     <Text style={{fontSize:19,fontWeight:"bold",color:'#C38A68'}}>Work List</Text>
   </View>

<View style={{flexDirection:'row',marginVertical:5}}>
<View style={{flex:7,borderWidth:1,padding:5,justifyContent:'center',alignItems:'center'}}>
  <Text style={{fontSize:16}}>Cleaner /Apartment /Customer</Text>

</View>
<View style={{flex:3,justifyContent:'center',alignItems:"center"}}>
  <MaterialIcons
  name="settings-input-composite"
  size={30}
  />
</View>
</View>

<Text style={{fontSize:14,textAlign:'center',modalVisible:5}}>Today's Activitis List</Text>

<View style={{marginVertical:10,marginHorizontal:5}}>
<FlatList
data={data}
renderItem={this.renderItems}

/>
</View>



      </View>
    );
  }
}

const styles = StyleSheet.create({});
