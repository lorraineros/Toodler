import { StyleSheet } from 'react-native'
import { darkerBlue, stTropaz } from '../../styles/colors'

export default StyleSheet.create({
  selected: {
    borderColor: darkerBlue,
    borderWidth: 1,
    borderRadius: 5
  },
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
