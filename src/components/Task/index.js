import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'
import { Text, View } from 'react-native'

export const Task = ({
  id,
  name,
  description,
  isFinished,
  listId
}) => {
  const titleStyle = isFinished ? styles.finishTitle : styles.unfinishTitle
  const paraStyle = isFinished ? styles.finishPara : styles.unfinishPara
  return (
    <View>
      <Text style={ titleStyle }>
        {'\u2023'} { name }
      </Text>
      <Text style={ paraStyle }>
        { description }
      </Text>
    </View>
  )
}

Task.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFinished: PropTypes.string,
  listId: PropTypes.number
}
