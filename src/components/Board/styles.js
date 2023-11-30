import { StyleSheet } from 'react-native'
import { darkerBlue, paleCornflowerBlue, stTropaz } from '../../styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50,
    margin: 3,
    borderRadius: 20,
    backgroundColor: paleCornflowerBlue,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: stTropaz
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 13,
    color: darkerBlue
  },
  button: {
    padding: 5,
    borderRadius: 10
  },
  buttonText: {
    color: 'white'
  },
  image: {
    width: 200,
    height: 170
  },
  selected: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50,
    margin: 3,
    borderColor: darkerBlue,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: paleCornflowerBlue,
    alignItems: 'center',
    justifyContent: 'space-around',
    opacity: 0.5
  }
})
