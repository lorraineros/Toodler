import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './styles'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const Board = ({
  id,
  name,
  thumbnailPhoto,
  description,
  lists,
  boardName,
  selectBoard,
  navigate
}) => {
  const [boardList, setBoardList] = useState(lists ? lists.filter(l => l.boardId === id) : [])
  const [taskList, setTaskList] = useState(data.tasks || [])

  return (
    <View style={ boardName === name ? styles.selected : styles.container }>
      <Text style={ styles.title }>
        { name }
      </Text>
      <Text style={ styles.paragraph }>
        { description || name }
      </Text>
      <TouchableOpacity
        onPress={() => boardName === name ? selectBoard('') : selectBoard(name)}>
        <Image
          style={ styles.image }
          resizeMode='cover'
          source={{ uri: thumbnailPhoto }}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={ styles.button }
        onPress={() => { navigate('BoardDetail', { boardList, setBoardList, taskList, setTaskList, navigate }) }}>
        <Text>
          More Detail...
        </Text>
      </TouchableOpacity>
    </View>
  )
}

Board.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  description: PropTypes.string,
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    boardId: PropTypes.number
  })).isRequired,
  boardName: PropTypes.string.isRequired,
  selectBoard: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired
}

export default Board
