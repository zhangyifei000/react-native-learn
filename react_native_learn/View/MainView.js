import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, ScrollView, TouchableHighlight, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../Util/Util.js';

import NavigatorView from './Components/NavigatorBar/NavigatorView.js';
class MainView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boxs: this.getBoxs()
        }
    };

    getBoxs() {
        const boxs = [
          {
              key: 1,
              icon: 'ios-navigate',
              text: 'NavigatorIOS', 
              size: 50, 
              color:'#FF9A05',
              component: NavigatorView
          }
        ];
        return boxs
      }
    

    handleOnPress(item) {
        this.props.navigator.push({
            component: item.component
        })
    }

    renderTouchBox() {
        return this.state.boxs.map((item) => {
            return(
                <TouchableHighlight key={item.key} style={styles.touchBox} underlayColor={Util.color.silver_grey} onPress={() => this.handleOnPress(item)}>
                    <View style={styles.box}>
                        <Icon name={item.icon} size={item.size} color={item.color} style={styles.boxIcon}/>
                        <Text style={styles.boxTitle}>{item.text}</Text>
                    </View>
                </TouchableHighlight>
            );
        })
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.boxContainer}>
                    {this.renderTouchBox()}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0
    },
    boxContainer: {
        flexDirection: 'row',
        flexWrap:"wrap",        
        width: Util.scrren.width,
        borderTopWidth: 1/Util.pixe,
        borderTopColor: Util.color.silver_grey,
        borderLeftWidth: 1/Util.pixe,
        borderLeftColor: Util.color.silver_grey,
        borderRightWidth: 1/Util.pixe,
        borderRightColor: Util.color.silver_grey
    },
    touchBox: {
        width: Util.scrren.width/3,
        height: Util.scrren.width/3,
        backgroundColor: '#fff'
    },
    box: {
        backgroundColor: 'red',
        width: Util.scrren.width/3,
        height: Util.scrren.width/3,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1/Util.pixe,
        borderRightColor: Util.color.silver_grey,
        borderBottomWidth:1/Util.pixe,
        borderBottomColor: Util.color.silver_grey
    },
    boxTitle: {
        position: 'absolute',        
        bottom: 20,
        textAlign: 'center'
    },
    boxIcon: {
        position: 'absolute',
        top: 20
    }
});

export default MainView;