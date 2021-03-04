import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity,FlatList,ScrollView,Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import profile from '../utility/Index';
import QRCode from 'react-native-qrcode-generator';
export default class Customer extends Component {

constructor(){
  super()
  this.state={
    modalVisible:false
  }
}

  setModalVisible(visible) {
    this.setState({
        modalVisible: visible,
    })
}

renderItems=(data)=>{
   // console.warn(data)
    const {index} = data.item
    return(
        <View key={index} style={{padding:20,height:100,width:130,backgroundColor:"",justifyContent:'center',alignItems:'center',padding:10,marginVertical:10}}>
<View style={{justifyContent:"center",alignItems:"center",height:70,width:70,borderRadius:500,backgroundColor:"#ED6A63",}}>
<Image
source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6QozHf20WtKirRbCI1bpPBbe1FM7P7qErQ&usqp=CAU"}}
style={{height:60,width:60,borderRadius:500}}
/>
</View>
<Text style={{textAlign:'left',marginVertical:10}}>KA 36MA 4958</Text>
        </View>
    )
}

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: '#FFFFFF'}}>
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
              Customer
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#FCF3EC',
            marginVertical: 20,
           elevation:6,
            borderRadius: 8,
           
            marginHorizontal: 25,
           
          }}>
          <View style={{backgroundColor: ''}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Image
                source={{
                  uri: profile,
                }}
                style={{height: 70, width: 70, borderRadius: 500,marginTop:10}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 10,
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                Rohit Josh
              </Text>

              <View style={{flexDirection: 'row', left: 290, bottom: 110,position:"absolute",justifyContent:"space-between"}}>
                <Icon name="star" size={20} color="#FA7420" />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>4.7</Text>
              </View>

              <View style={{backgroundColor:'#0597DB',borderRadius:100,paddingVertical:8,paddingHorizontal:50,top:120,position: "absolute",zIndex:1,}}>
<Text style={{fontSize:18,color:"#fff"}}>Customer</Text>
              </View>
            </View>
          </View>
          <View style={{backgroundColor: '#fff',padding:7, paddingTop: 30,flexDirection:'row'}}> 
          <View style={{flex:1,justifyContent:"center",alignItems:'center',borderRightWidth:1,paddingVertical:8}}>
              <Icon
              name="home"
              size={30}
              color="#41A0CA"
              />
          </View>
          <View style={{flex:1,justifyContent:"center",alignItems:'center',borderRightWidth:1,}}>
              <Icon
              name="phone"
              size={30}
              color="green"
              />
          </View>
          <View style={{flex:1,justifyContent:"center",alignItems:'center',borderRightWidth:0,}}>
              <Icon
              name="whatsapp"
              size={30}
              color="green"
              />
          </View>
          
          </View>
        </View>

<View style={{flexDirection:'row',borderBottomWidth:1,paddingBottom:15,marginHorizontal:10,borderBottomColor:"#757575",marginBottom:10}}>
<View style={{flex:2,justifyContent:"center",alignItems:"center"}}>
<Image
source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWwNrmHTrw-DkZ02o15HMa3GAG70o6Yam9Q&usqp=CAU"}}
style={{height:50,width:50,borderRadius:500}}
/>
    </View>
    <View style={{flex:8,marginHorizontal:10}}>
<Text style={{fontSize:17,fontWeight:"bold"}}>Kalka Appartment</Text>
<Text>GOMOAPART45366</Text>
    </View>
   
   
    </View>
    <View style={{flexDirection:'row',borderBottomWidth:1,paddingBottom:15,marginHorizontal:10,borderBottomColor:"#757575",marginBottom:10}}>
<View style={{flex:2,justifyContent:"center",alignItems:"center"}}>
<Icon
name="building"
size={30}
/>
    </View>
    <View style={{flex:8,marginHorizontal:10}}>
<Text numberOfLines={2} style={{fontSize:15,fontWeight:"500",color:'#878787'}}>HRS Layout,Murgeshpally, near templesada,Banglore - 560066</Text>

    </View>
   
   
    </View>

    <View style={{flexDirection:'row',borderBottomWidth:1,paddingBottom:15,marginHorizontal:10,borderBottomColor:"#757575"}}>
<View style={{flex:2,borderRightWidth:1,flexDirection:'row',justifyContent:"space-around",borderRightWidth:1,alignItems:'center'}}>
<MaterialIcons
name="access-alarm"
size={30}
/>
<Text style={{fontSize:18,fontWeight:'bold'}}>7 AM - 9 AM</Text>
</View>
   
<View style={{flex:1.5,borderRightWidth:1,flexDirection:'row',justifyContent:"space-around",borderRightWidth:1,alignItems:'center'}}>
<MaterialIcons
name="zoom-out-map"
size={30}
/>
<Text style={{fontSize:18,fontWeight:'bold'}}>1/03</Text>
</View>
<View style={{flex:1.5,borderRightWidth:1,flexDirection:'row',justifyContent:"space-around",borderRightWidth:1,alignItems:'center'}}>
<MaterialIcons
name="zoom-out-map"
size={30}
/>
<Text style={{fontSize:18,fontWeight:'bold'}}>3/12</Text>
</View>
   
    </View>

<Text style={{fontSize:18,fontWeight:'500',marginVertical:5,marginHorizontal:10}}>Car Details</Text>

<View style={{marginHorizontal:10}}>
<FlatList
data={[1,2]}
renderItem={this.renderItems}
horizontal={true}
/>
</View>


<TouchableOpacity 
 onPressOut={() => {this.setModalVisible(true)}}
style={{backgroundColor:"#FCF3EC",borderRadius:30,justifyContent:"space-around",alignItems:'center',flexDirection:'row',paddingVertical:10,marginHorizontal:20,marginBottom:50,marginTop:10,paddingHorizontal:10}}>
<Icon 
name="qrcode"
size={25}
/>
<Text style={{fontSize:16}}>Assign QR code for this Customer</Text>
</TouchableOpacity>




<Modal
          animationType="slide"
          transparent={true}
         
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)}}
         
        >
         <TouchableOpacity  onPress={() => {this.setModalVisible(false)}}>
         <View style={{justifyContent:'center',alignItems:'center',height:300,width:300,backgroundColor:"",top:150,left:50,opacity:.5}}>
          <QRCode
          value="Customer"
          size={200}
          bgColor='black'
          fgColor='white'/>
          </View>
         </TouchableOpacity>
         
        </Modal>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
