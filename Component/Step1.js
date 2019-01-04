import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
// import moment from 'moment'
// import DateTimePicker from 'react-native-modal-datetime-picker'



class Step1 extends Component {
  
  // ShowPicker = () => {
  //   this.setState({
  //     isVisible: true
  //   })
  // }
  // HidePicker = (datetime) => {
  //   this.setState({
  //     isVisible: false,
  //     chosenDate: moment(datetime).format('HH:mm Ngày D-M-YYYY')

  //   })
  // }
  // HandlePicker = (datetime) => {
  //   this.setState({
  //     isVisible: false,
  //     chosenDate: moment(datetime).format('HH:mm Ngày D-M-YYYY')

  //   })
  // }


  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', }}>
        <View style={{ flex: 90, marginLeft: 20, marginTop: 50 }}>
          <TextInput
            style={{ fontSize: 18, marginLeft: 40 }}
            placeholder='Điểm đi'
            onChangeText={this.props.onFromChanged}
          />
          <TextInput
            style={{ fontSize: 18, marginLeft: 40 }}
            placeholder='Điểm đến'
            onChangeText={this.props.onToChanged}
          />
          <TextInput
            style={{ fontSize: 18, marginLeft: 40 }}
            placeholder='Ngày giờ'
            onChangeText={this.props.onTimeChanged}
          />

        </View>
        <View style={{ flex: 10, alignItems: 'center' }}>
          <TouchableOpacity style={{
            backgroundColor: 'rebeccapurple', borderRadius: 15, width: 100, alignItems: 'center'
          }} onPress={this.props.onStatusStepChanged2}>
            <Text style={{ color: 'white' }}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
export default Step1;