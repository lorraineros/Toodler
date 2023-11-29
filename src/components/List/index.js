import PropTypes from 'prop-types'
import React from 'react'
import { Task } from '../Task'
import { Text, View } from 'react-native'
import styles from './styles'

export const List = ({
  id,
  name,
  color,
  boardId,
  tasks
}) => {
  const taskList = tasks ? tasks.filter(t => t.listId === id) : []
  const backgroundStyles = {
    width: 300,
    height: 200,
    padding: 20,
    margin: 10,
    borderWidth: 10,
    borderColor: color,
    borderRadius: 20,
    backgroundColor: 'white'
  }
  return (
    <View style= { backgroundStyles }>
      <Text style= { styles.title }>
        { name }
      </Text>
      {taskList.map(t => <Task key={t.id} {...t} />)}
    </View>
  )
}

List.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  boardId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isFinished: PropTypes.string,
    listId: PropTypes.number
  })).isRequired
}
