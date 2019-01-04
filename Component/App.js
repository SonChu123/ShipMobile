/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import DateTimePicker from 'react-native-modal-datetime-picker'
// import moment from 'moment'
import Step1 from './Step1'
import Step2 from './Step2'
// import Step2 from './Step2'
import Step3 from './Step3'


// import { createStackNavigator, createAppContainer } from 'react-navigation'
// import {orderInfo} from '../Model/orderInfo'
// import 'es6-symbol/implement';


class Step extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.state = {
      statusStep: 1,
      time: '',
      from: '',
      to: '',
      items: '',
      weight: '',
      tempvehicleType: '',//loại xe
      vehicleSize: '',
      amount: '',
      step3: '',
      step4: ''
    }


  }
  // handleTimeValueChanged=(text)=>{
  //   this.setState({
  //     chosenDate : text
  //   })
  //   console.log(time)
  //   var time = this.state.isVisible
  // }
  handleFromValueChanged = (text) => {
    this.setState({
      from: text
    })
    console.log(this.state.from)
  }
  handleToValueChanged = (text) => {
    this.setState({
      to: text
    })
    console.log(this.state.to)
  }
  handleItemsValueChanged = (text) => {
    this.setState({
      items: text
    })

  }
  handleTimeValueChanged = (text) => {
    this.setState({
      time: text
    })
    console.log(this.state.time)
  }
  handleWeightValueChanged = (text) => {
    this.setState({
      weight: text
    })
    
  }
  handleTempvehicleTypeValueChanged = (text) => {
    this.setState({
      tempvehicleType: text
    })
   }
  handleVehicleSizeValueChanged = (text) => {
    this.setState({
      vehicleSize: text
    })
    
  }
  handleAmountValueChanged = (text) => {
    this.setState({
      amount: text
    })
   }
  

  
  handleStatusStepChanged2 = () => {
    if (this.state.from == '') {
      alert('Bạn chưa nhập điểm đi')
    }
    else {
      if (this.state.to == '') {
        alert('Bạn chưa nhập điểm đến')
      }
      else {
        if (this.state.time == '') {
          alert('Bạn chưa nhập thời gian')
        }
        else {
          this.setState({
            statusStep: 2
          })
          // alert('Success')
          // const order = new oderInfo ({
          //   from: this.state.from,
          //   to:this.state.to,
          //   time: this.state.chosenDate,
          //   items:this.state.items,
          //   weight:this.state.weight,
          //   tempvehicleType:this.state.tempvehicleType,//loại xe
          //   vehicleSize:this.state.vehicleSize,
          //   amount:this.state.amount,
          // })
          // const myJSON=JSON.stringify(order);
          // alert(myJSON.fullOder);
        }
      }


    }
  }

  handleStatusStepChanged3 = () => {
    if (this.state.items == '') {
      alert('Bạn chưa nhập loại hàng')
    }
    else {
      if (this.state.weight == '') {
        alert('Bạn chưa nhập khối lượng')
      }
      else {
        if (this.state.tempvehicleType == '') {
          alert('Bạn chưa nhập loại xe')
        }
        else {
          if (this.state.vehicleSize == '') {
            alert('Bạn chưa nhập kích thước')
          }
          else{
            if (this.state.amount == '') {
              alert('Bạn chưa nhập số lượng')
            }
            else{
              this.setState({
                statusStep: 3
              })
              

            }
          }
          
          // alert('Success')
          // const order = new oderInfo ({
          //   from: this.state.from,
          //   to:this.state.to,
          //   time: this.state.chosenDate,
          //   items:this.state.items,
          //   weight:this.state.weight,
          //   tempvehicleType:this.state.tempvehicleType,//loại xe
          //   vehicleSize:this.state.vehicleSize,
          //   amount:this.state.amount,
          // })
          // const myJSON=JSON.stringify(order);
          // alert(myJSON.fullOder);
        }
      }


     }
   }
  
  // HandleSubmit=()=>{
  //   const order = new orderInfo ({
  //     from: this.state.from,
  //     to:this.state.to,
  //     time: this.state.chosenDate,
  //     items:this.state.items,
  //     weight:this.state.weight,
  //     tempvehicleType:this.state.tempvehicleType,//loại xe
  //     vehicleSize:this.state.vehicleSize,
  //     amount:this.state.amount,
  //   })
  //   console.log(order.fullOrder)
  //   // const myJSON=JSON.stringify(order.fullOrder);
  //   // alert(myJSON);
  // }
  render() {

    if (this.state.statusStep == 1) {
      return (
        <Step1
          propFrom={this.state.from}
          propTo={this.state.to}
          propTime={this.state.time}
          onFromChanged={this.handleFromValueChanged}
          onToChanged={this.handleToValueChanged}
          onStatusStepChanged2={this.handleStatusStepChanged2}
          onTimeChanged={this.handleTimeValueChanged}
        />
        )
        //   <View style={{ flex: 1, flexDirection: 'column', }}>
        //   <View style={{ flex: 90, marginLeft: 20, marginTop: 50 }}>
        //     <TextInput
        //       style={{ fontSize: 18 , marginLeft:40}}
        //       placeholder='Điểm đi'
        //       onChangeText={(text) => {
        //         this.setState({
        //           from: text
        //         })
        //       }}

        //     />
        //     <TextInput
        //       style={{ fontSize: 18 ,marginLeft:40}}
        //       placeholder='Điểm đến'
        //       onChangeText={(text) => {
        //         this.setState({
        //           to: text
        //         })
        //       }}

        //     />

        //     <DateTimePicker
        //     isVisible={this.state.isVisible}
        //     onConfirm={this.HandelPicker}
        //     onCancel={this.HidePicker}
        //     />
        //     <TouchableOpacity onPress={this.ShowPicker} style={{flexDirection:'row'}}>
        //       <Image source={require('../resouces/lichh.jpg')} style={{width:25,height:25}}/>
        //       <Text style={{fontSize:17,marginLeft:20}}>{this.state.chosenDate}</Text>
        //     </TouchableOpacity>


        //   </View>
        //   <View style={{ flex: 10, alignItems: 'center' }}>
        //     <TouchableOpacity style={{
        //       backgroundColor: 'rebeccapurple', borderRadius: 15, width: 100, alignItems: 'center'
        //     }} onPress={this.HandleStep}>
        //       <Text style={{ color: 'white' }}>Tiếp tục</Text>
        //     </TouchableOpacity>
        //   </View>

        // </View>
      
    }

    if (this.state.statusStep == 2) {
      return (
        <Step2
          onItemsChanged={this.handleItemsValueChanged}
          onWeightChanged={this.handleWeightValueChanged}
          onTempvehicleTypeChanged={this.handleTempvehicleTypeValueChanged}
          onVehicleSizeChanged={this.handleVehicleSizeValueChanged}
          onAmountChanged={this.handleAmountValueChanged}
          onStatusStepChanged3={this.handleStatusStepChanged3}
        
        />
        
      )
    }
    if (this.state.statusStep == 3) {
      return (
        <Step3
        propFrom={this.state.from}
        propTo={this.state.to}
        propTime={this.state.time}
        propItem={this.state.items}
        propWeight={this.state.weight}
        propTemvehicleType={this.state.tempvehicleType}
        propVehicleSize={this.state.vehicleSize}
        propAmount={this.state.amount}
        // onSubmit= {this.HanleSubmit}
        />
      )
    }
    
    
  }
  
}

// export default App;

// const AppStack = createStackNavigator(
//   {
//       Home: {screen: Step},
//       Step2: {screen: Step2}
//   },
//   {
//     initialRouteName:'Home'
//   }

// );
// const AppContainer = createAppContainer(AppStack);
// export default AppContainer;
export default Step;
// const styles = StyleSheet.create({

// });