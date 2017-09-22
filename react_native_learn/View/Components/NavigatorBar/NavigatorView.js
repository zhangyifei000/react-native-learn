import React, {Component} from 'react';
import {View} from 'react-native';

class NavigatorView extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                
            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'red',
        height: 100,
        width: 100
    }
}

export default NavigatorView;