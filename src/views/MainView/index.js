import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { BoardList } from '../../components/BoardList'

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <BoardList navigate={navigate} boards={data.boards}></BoardList>
  </View>
)

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default Main
