import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Util from '../../../Util/Util.js'
class NavigatorView extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <ScrollView style={styles.container}>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        marginTop: 0
    }
}

const markDownStyles = {
    heading1: {
        fontSize: 22,
      },
      strong: {
        fontSize: 18,
      },
      paragraph: {
        fontSize: 14,
      },
      view: {
        borderWidth: 1,
      },
}

export default NavigatorView;