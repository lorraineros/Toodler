import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export const Board = ({
  id,
  name,
  thumbnailPhoto,
  description,
  lists,
  navigate
}) => {
  const boardList = lists ? lists.filter(l => l.boardId === id) : []
  console.log('a', boardList)
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        { name }
      </Text>
      <Text style={ styles.paragraph }>
        { description || name }
      </Text>
      <Image
        style={ styles.image }
        resizeMode='cover'
        source={{ uri: thumbnailPhoto }}/>
      <TouchableOpacity
        style={ styles.button }
        onPress={() => { navigate('BoardDetail', { boardList, navigate }) }}>
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
  navigate: PropTypes.func.isRequired
}
