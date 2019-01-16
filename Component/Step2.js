import React, { Component } from 'react';
import { StyleSheet, Text, Picker, TouchableOpacity, View, TextInput, Image } from 'react-native';
import ModalSelector from 'react-native-modal-selector'





class Step2 extends Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', }}>
        <View style={{ flex: 10,marginTop:15,marginLeft:15}}>
          <TouchableOpacity onPress={this.props.onHandleBack2}>
            <Image source={require('../resouces/backk.png')} style={{ width: 30, height: 20 }} />
          </TouchableOpacity>
        </View>
          <View style={{ flex: 80,marginLeft: 20, marginTop: 15}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../resouces/hanghoa.png')} style={{ marginTop:6,width: 25, height: 25 }} />
            <TextInput
              style={{ fontSize: 18, color: 'black',marginLeft:20 }}
              placeholder='Loại hàng'
              onChangeText={this.props.onItemsChanged}

            />
            </View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../resouces/cannang.png')} style={{ marginTop:6,width: 25, height: 25 }} />
            <TextInput
              style={{ fontSize: 18, color: 'black' ,marginLeft:20}}
              placeholder='Khối lượng'
              onChangeText={this.props.onWeightChanged}
              keyboardType={"numeric"}
            />
            <Text style={{fontSize:18,color:'black',marginLeft:160,marginTop:10}}>Tấn</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <Image source={require('../resouces/loaixe.png')} style={{ marginTop:6,width: 25, height: 25 }} />
            <ModalSelector
              data={this.props.propDataVehicle}
              key={this.props.propDataVehicle}
              initValue="Loại xe"
              supportedOrientations={['landscape']}
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              onChange={this.props.onTempvehicleTypeChanged}>


              <TextInput
                style={{ fontSize: 18, color: 'black',marginLeft:20 }}
                editable={false}
                placeholder="Loại xe"
                value={this.props.propTempvehicleType}
              />

            </ModalSelector>
            </View>

            <View style={{flexDirection:'row'}}>
            <Image source={require('../resouces/kichthuoc.png')} style={{ marginTop:6,width: 25, height: 25 }} />
            <ModalSelector

              data={this.props.propDataVehicleSize}
              key={this.props.propDataVehicleSize}
              initValue="Trọng tải"
              supportedOrientations={['landscape']}
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              onChange={this.props.onVehicleSizeChanged}>
              <TextInput
                style={{ fontSize: 18, color: 'black' ,marginLeft:20}}
                editable={false}
                placeholder="Trọng tải"
                value={this.props.propTempvehicleSize}
                
              />

            </ModalSelector>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../resouces/soluong.png')} style={{ marginTop:6,width: 25, height: 25 }} />
            <TextInput
              style={{ fontSize: 18, color: 'black',marginLeft:20}}
              placeholder='Số lượng'
              onChangeText={this.props.onAmountChanged}
              keyboardType={"numeric"}
            />
            </View>


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