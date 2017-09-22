import Dimensions from 'Dimensions'
import {PixelRatio, Platform} from 'react-native'

const Util = {
    scrren: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    pixe: PixelRatio.get(),
    platform: Platform.OS,
    color: {
        silver_grey: '#ccc', //银灰色
    }
}

export default Util;