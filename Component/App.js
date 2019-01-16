/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Step1 from './Step1'
import Step2 from './Step2'
// import Step2 from './Step2'
import Step3 from './Step3'
import moment from 'moment'
import {xethungmuibat,dataVehicle,xetaithungkin,xetaidonglanh} from './data'
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
      isVisible: false,
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
      step4: '',

    }

  }
  handleBackStep2=()=>{
    this.setState({
      statusStep: 1
    })
  }
  handleBackStep3=()=>{
    this.setState({
      statusStep: 2
    })
  }

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
  handleVehicleSizeValueChanged = (option) => {
    this.setState({
      vehicleSize: option.label
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
            alert('Bạn chưa nhập trọng tải')
          }
          else {
            if (this.state.amount == '') {
              alert('Bạn chưa nhập số lượng')
            }
            else {
              this.setState({
                statusStep: 3
              })


            }
          }
        }
      }
    }
  }
  ShowPicker = () => {
    this.setState({
      isVisible: true
    })
  }
  HidePicker = (datetime) => {
    this.setState({
      isVisible: false,
      time: moment(datetime).format('HH:mm Ngày D-M-YYYY')

    })
  }
  HandlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      time: moment(datetime).format('HH:mm Ngày D-M-YYYY')

    })
  }


  handleTempvehicleTypeChanged = (option) => {
    this.setState({ tempvehicleType: option.label })
    console.log(this.state.tempvehicleType)
  }
  handleGetdata = () => {
    if (this.state.tempvehicleType == 'Xe thùng mui bạt') {
       return xethungmuibat;
    } else {
      if (this.state.tempvehicleType == 'Xe tải thùng kín') {
       return xetaithungkin;
      }
      else{
        if(this.state.tempvehicleType == 'Xe tải đông lạnh') {
          return xetaidonglanh;
        }
      }
    }
    
  }
  
  render() {

    if (this.state.statusStep == 1) {
      return (
        <Step1
          propFrom={this.state.from}
          propTo={this.state.to}
          propTime={this.state.time}
          propisVisible={this.state.isVisible}
          onFromChanged={this.handleFromValueChanged}
          onToChanged={this.handleToValueChanged}
          onStatusStepChanged2={this.handleStatusStepChanged2}
          onTimeChanged={this.handleTimeValueChanged}
          onHandlePicker={this.HandlePicker}
          onShowPicker={this.ShowPicker}
          onHidePicker={this.HidePicker}
        />
      )
    }

    if (this.state.statusStep == 2) {
      return (
        <Step2
          propDataVehicle={dataVehicle}
          // propDataVehicleSize={dataVehicleSize}
          propDataVehicleSize={this.handleGetdata()}
          propTempvehicleType={this.state.tempvehicleType}
          propTempvehicleSize={this.state.vehicleSize}
          onHandleBack2={this.handleBackStep2}
          onItemsChanged={this.handleItemsValueChanged}
          onWeightChanged={this.handleWeightValueChanged}
          onVehicleSizeChanged={this.handleVehicleSizeValueChanged}
          onAmountChanged={this.handleAmountValueChanged}
          onStatusStepChanged3={this.handleStatusStepChanged3}
          onTempvehicleTypeChanged={this.handleTempvehicleTypeChanged}

        />

      )
    }
    if (this.state.statusStep == 3) {
      return (
        <Step3
          propFrom={this.state.from}
          propTo={this.state.to}
          propTime={this.state.time}
          propItems={this.state.items}
          propWeight={this.state.weight}
          propTemvehicleType={this.state.tempvehicleType}
          propVehicleSize={this.state.vehicleSize}
          propAmount={this.state.amount}
          onHandleBack3={this.handleBackStep3}

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