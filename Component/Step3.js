import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Step3 extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', }}>
            <View style={{flex:80}}>
                <Text style={{fontSize:24 , textAlign:'center'}}> Đơn hàng</Text>
                <View style={{ marginLeft: 10, marginTop: 20 ,flexDirection:'row'}}>

                    <Text style={{fontSize:18}}>Điểm đi:</Text>
                    <Text style={{fontSize:16}}>{this.props.propFrom}</Text>

                </View>
                <View style={{ marginLeft: 10, marginTop: 20,flexDirection:'row' }}>

                    <Text style={{fontSize:18}}>Điểm đến:</Text>
                    <Text style={{fontSize:16}}>{this.props.propTo}</Text>

                </View>
                <View style={{ marginLeft: 10, marginTop: 20,flexDirection:'row' }}>

                    <Text style={{fontSize:18}}>Thời gian bốc hàng:</Text>
                    <Text style={{fontSize:16}}>{this.props.propTime}</Text>

                </View>
                <View style={{ marginLeft: 10, marginTop: 20,flexDirection:'row' }}>

                    <Text style={{fontSize:18}}>Loại hàng:</Text>
                    <Text style={{fontSize:16}}>{this.props.propItems}</Text>

                </View>
                <View style={{ marginLeft: 10, marginTop: 20,flexDirection:'row' }}>

                    <Text style={{fontSize:18}}>Khối lượng hàng:</Text>
                    <Text style={{fontSize:16}}>{this.props.propWeight}</Text>

                </View>
                <View style={{ marginLeft: 10, marginTop: 20,flexDirection:'row' }}>

                    <Text style={{fontSize:18}}>Loại xe:</Text>
                    <Text style={{fontSize:16}}>{this.props.propTemvehicleType}</Text>

                </View>
                <View style={{ marginLeft: 10, marginTop: 20 ,flexDirection:'row'}}>

                    <Text style={{fontSize:18}}>Kích thước xe thuê:</Text>
                    <Text style={{fontSize:16}}>{this.props.propVehicleSize}</Text>

                </View>
                <View style={{ marginLeft: 10, marginTop: 20 ,flexDirection:'row'}}>

                    <Text style={{fontSize:18}}>Số lượng:</Text>
                    <Text style={{fontSize:16}}>{this.props.propAmount}</Text>

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