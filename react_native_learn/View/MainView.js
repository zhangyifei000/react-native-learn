import React, {Component, PropTypes} from 'react';
import {StyleSheet ,View, ScrollView, TouchableHighlight, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../Util/Util.js';

class MainView extends Component {
    constructor(props) {
        super(props)
    };

    handleOnPress(index) {
        console.log('点击了' + index);
    }

    renderTouchBox() {
        return this.props.boxs.map((item, index) => {
            return(
                <TouchableHighlight key={item.key} style={styles.touchBox} underlayColor={Util.color.silver_grey} onPress={() => this.handleOnPress(index)}>
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
        marginTop: 44
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

MainView.propTypes = {
    boxs: PropTypes.array.isRequired
}

export default MainView;