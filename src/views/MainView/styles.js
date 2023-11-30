import { StyleSheet } from 'react-native'
import { jordyBlue, graniteGray } from '../../styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    top: 11,
    backgroundColor: jordyBlue,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  paragraph: {
    textAlign: 'center',
    color: 'white'
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: graniteGray
  },
  buttonText: {
    color: 'white'
  },
  logo: {
    width: 200,
    height: 200
  }
})
