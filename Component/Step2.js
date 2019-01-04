import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';



class Step2 extends Component {  
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', }}>
      <View style={{ flex: 90, marginLeft: 20, marginTop: 50 }}>
        <TextInput
          style={{ fontSize: 18 }}
          placeholder='Loại hàng'
          onChangeText={this.props.onItemsChanged}

        />
        <TextInput
          style={{ fontSize: 18 }}
          placeholder='Khối lượng'
          onChangeText={this.props.onWeightChanged}

        />
        <TextInput
          style={{ fontSize: 18 }}
          placeholder='Loại xe'
          onChangeText={this.props.onTempvehicleTypeChanged}

        />
        <TextInput
          style={{ fontSize: 18 }}
          placeholder='Kích thước'
          onChangeText={this.props.onVehicleSizeChanged}

        />
        <TextInput
          style={{ fontSize: 18 }}
          placeholder='Số lượng'
          onChangeText={this.props.onAmountChanged}

        />



      </View>
      <View style={{ flex: 10, alignItems: 'center' }}>
        <TouchableOpacity style={{
          backgroundColor: 'rebeccapurple', borderRadius: 15, width: 100, alignItems: 'center'
        }} onPress={this.props.onStatusStepChanged3}>
          <Text style={{ color: 'white' }}>Đặt xe</Text>
        </TouchableOpacity>
      </View>

    </View>
    );
  }
}
export default Step2;