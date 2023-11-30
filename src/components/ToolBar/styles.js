import { StyleSheet, Dimensions } from 'react-native'
import { darkerBlue, stTropaz } from '../../styles/colors'

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
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 40,
    backgroundColor: stTropaz
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
