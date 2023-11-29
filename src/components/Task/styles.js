import { StyleSheet } from 'react-native'
import { darkerBlue, stTropaz } from '../../styles/colors'

export default StyleSheet.create({
  unfinishTitle: {
    fontSize: 15,
    color: stTropaz
  },
  finishTitle: {
    fontSize: 15,
    color: stTropaz,
    textDecorationLine: 'line-through'
  },
  unfinishPara: {
    paddingBottom: 5,
    fontSize: 13,
    color: darkerBlue
  },
  finishPara: {
    paddingBottom: 5,
    fontSize: 13,
    color: darkerBlue,
    textDecorationLine: 'line-through'
  }
})
