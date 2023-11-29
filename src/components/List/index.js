import PropTypes from 'prop-types'
import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

export const List = ({
  id,
  name,
  color,
  boardId,
  tasks,
  navigate
}) => {
  const listList = tasks ? tasks.filter(t => t.listId === id) : []
  return (
    <View>
      <TouchableHighlight
          onPress={() => { navigate('ListDetail', { listList }) }}>
          <Text>
            { name }
          </Text>
      </TouchableHighlight>
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
  })).isRequired,
  navigate: PropTypes.func.isRequired
}
