import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';

class Step4 extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', }}>
                <View style={{ flex: 90, marginLeft: 20, marginTop: 50 }}>
                    <TextInput
                        style={{ fontSize: 18 }}
                        placeholder='Step4'
                        onChangeText={(text) => {
                            this.setState({
                                step4: text
                            })
                        }}

                    />




                </View>
                <View style={{ flex: 10, alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'rebeccapurple', borderRadius: 15, width: 100, alignItems: 'center'
                    }}>
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
export default Step4;