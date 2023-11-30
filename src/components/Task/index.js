import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'
import { Text, TouchableOpacity, View } from 'react-native'

const Task = ({
  id,
  name,
  description,
  isFinished,
  listId,
  taskName,
  selectTask
}) => {
  const titleStyle = isFinished ? styles.finishTitle : styles.unfinishTitle
  const paraStyle = isFinished ? styles.finishPara : styles.unfinishPara
  return (
    <View style= { taskName === name ? styles.selected : null }>
      <TouchableOpacity
        onPress={() => taskName === name ? selectTask('') : selectTask(name)}>
        <Text style={ titleStyle }>
          {'\u2023'} { name }
        </Text>
      </TouchableOpacity>
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
  listId: PropTypes.number,
  taskName: PropTypes.string,
  selectTask: PropTypes.func
}

export default Task
