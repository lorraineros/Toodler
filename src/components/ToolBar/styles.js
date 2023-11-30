import { StyleSheet, Dimensions } from 'react-native'
import { darkerBlue } from '../../styles/colors'

const { width: winWidth } = Dimensions.get('window')

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: winWidth,
    height: 40,
    backgroundColor: darkerBlue
  },
  taskToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    backgroundColor: darkerBlue
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center'
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16
  }
})
