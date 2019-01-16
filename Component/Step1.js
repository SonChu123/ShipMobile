import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'



class Step1 extends Component {




  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column',backgroundColor:'white' }}>
        <View style={{ flex: 90, marginLeft: 20, marginTop: 50 }}>
        <View style={{flexDirection:'row'}}>
          <Image source={require('../resouces/diemdi.png')} style={{ width: 20, height: 30 }} />
          <TextInput
            style={{ fontSize: 18, marginLeft: 40  }}
            placeholder='Điểm đi'
            onChangeText={this.props.onFromChanged}
          >        
          </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
          <Image source={require('../resouces/diemden.png')} style={{ width: 20, height: 30 }} />
          <TextInput
            style={{ fontSize: 18, marginLeft: 40 }}
            placeholder='Điểm đến'
            onChangeText={this.props.onToChanged}
          >
            
          </TextInput>
          </View>
          <DateTimePicker
            isVisible={this.props.propisVisible}
            onConfirm={this.props.onHandlePicker}
            onCancel={this.props.onHidePicker}
            mode={'datetime'}
            is24Hour={true}
          />
          <TouchableOpacity onPress={this.props.onShowPicker} style={{ flexDirection: 'row' }}>
            <Image source={require('../resouces/lichh.jpg')} style={{ width: 25, height: 25 }} />
            <Text style={{ fontSize: 17, marginLeft: 20 ,color:'black'}}>{this.props.propTime}</Text>
          </TouchableOpacity>

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