import React, { Component } from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';

class Step3 extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', }}>
                <View style={{ flex: 10, marginTop: 15, marginLeft: 15 }}>
                    <TouchableOpacity onPress={this.props.onHandleBack3}>
                        <Image source={require('../resouces/backk.png')} style={{ width: 30, height: 20 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 80 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', color: 'black' }}> Đơn hàng</Text>
                    <View style={{ marginLeft: 10, marginTop: 20, flexDirection: 'row' }}>

                        <Text style={{ fontSize: 18, color: 'black' }}>Điểm đi:  </Text>
                        <Text style={{ fontSize: 18, color: 'black',textAlign:'center'  }}>{this.props.propFrom}</Text>

                    </View>
                    <View style={{ marginLeft: 10, marginTop: 20, flexDirection: 'row' }}>

                        <Text style={{ fontSize: 18, color: 'black' }}>Điểm đến:  </Text>
                        <Text style={{ fontSize: 18, color: 'black' ,textAlign:'center' }}>{this.props.propTo}</Text>

                    </View>
                    <View style={{ marginLeft: 10, marginTop: 20, flexDirection: 'row' }}>

                        <Text style={{ fontSize: 18, color: 'black' }}>Thời gian bốc hàng:  </Text>
                        <Text style={{ fontSize: 18, color: 'black',textAlign:'center'  }}>{this.props.propTime}</Text>

                    </View>
                    <View style={{ marginLeft: 10, marginTop: 20, flexDirection: 'row' }}>

                        <Text style={{ fontSize: 18, color: 'black' }}>Loại hàng:  </Text>
                        <Text style={{ fontSize: 18, color: 'black',textAlign:'center'  }}>{this.props.propItems}</Text>

                    </View>
                    <View style={{ marginLeft: 10, marginTop: 20, flexDirection: 'row' }}>

                        <Text style={{ fontSize: 18, color: 'black' }}>Khối lượng hàng:  </Text>
                        <Text style={{ fontSize: 18, color: 'black',textAlign:'center' }}>{this.props.propWeight}</Text>

                    </View>
                    <View style={{ marginLeft: 10, marginTop: 20, flexDirection: 'row' }}>

                        <Text style={{ fontSize: 18, color: 'black' }}>Loại xe:  </Text>
                        <Text style={{ fontSize: 18, color: 'black',textAlign:'center'  }}>{this.props.propTemvehicleType}</Text>

                    </View>
                    <View style={{ marginLeft: 10, marginTop: 20, flexDirection: 'row' }}>

                        <Text style={{ fontSize: 18, color: 'black' }}>Trọng tải:  </Text>
                        <Text style={{ fontSize: 18, color: 'black',textAlign:'center'  }}>{this.props.propVehicleSize}</Text>

                    </View>
                    <View style={{ marginLeft: 10, marginTop: 20, flexDirection: 'row' }}>

                        <Text style={{ fontSize: 18, color: 'black' }}>Số lượng:  </Text>
                        <Text style={{ fontSize: 18, color: 'black' }}>{this.props.propAmount}</Text>

                    </View>

                </View>
                {/* <View style={{ flex: 10, alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'rebeccapurple', borderRadius: 15, width: 100, alignItems: 'center'
                    }}
                    
                    >
                        <Text style={{ color: 'white' }}>Đặt xe</Text>
                    </TouchableOpacity>
                </View> */}
            </View>

        )
    }
}
export default Step3;