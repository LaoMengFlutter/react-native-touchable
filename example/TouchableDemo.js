/**
 * Created by mengqingdong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Touchable from 'react-native-touchable'

export default class TouchableDemo extends Component {

    render() {
        return (
            <View style={{flex:1,marginTop:30}}>
                <Touchable
                    onPress={()=>{
                       console.warn('点我');
                    }}>
                    <Text>点我</Text>
                </Touchable>

                <Touchable
                    style={{marginTop:20,backgroundColor:'#cccccc'}}
                    onPress={()=>{
                       console.warn('点我');
                    }}>
                    <Text>点我</Text>
                </Touchable>

                <Touchable
                    style={{marginTop:20,borderColor:'#cccccc',borderWidth:1,backgroundColor:'#cccccc00'}}
                    onPress={()=>{
                       console.warn('点我');
                    }}>
                    <Text>点我</Text>
                </Touchable>

                <Touchable
                    style={{marginTop:20,height:50,width:150,backgroundColor:'#cccccc'}}
                    onPress={()=>{
                       console.warn('点我');
                    }}>
                    <Text>点我</Text>
                </Touchable>

                <Touchable
                    style={{marginTop:20,height:50,width:150,backgroundColor:'#cccccc',justifyContent:'flex-start',alignItems:'flex-start'}}
                    onPress={()=>{
                       console.warn('点我');
                    }}>
                    <Text>点我</Text>
                </Touchable>

                <Touchable
                    style={styles.touchable}
                    onPress={()=>{
                       console.warn('点我');
                    }}>
                    <Text>点我</Text>
                </Touchable>

                <Touchable
                    style={[styles.touchable,{backgroundColor:'blue',}]}
                    onPress={()=>{
                       console.warn('点我');
                    }}>
                    <Text>点我</Text>
                </Touchable>


                <Touchable
                    activeOpacity={0.3}//此属性只对ios有效
                    style={[styles.touchable,{backgroundColor:'blue',}]}
                    onPress={()=>{
                       console.warn('点我');
                    }}>
                    <Text>点我</Text>
                </Touchable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    touchable:{
        marginTop:20,
        height:50,
        width:150,
        backgroundColor:'#cccccc',
        alignItems:'flex-start',
        paddingLeft:20
    }
})