import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'
import { Image, Text, TouchableHighlight, View } from 'react-native'

export const Board = ({
  id,
  name,
  thumbnailPhoto,
  lists,
  navigate
}) => {
  const boardList = lists ? lists.filter(l => l.boardId === id) : []
  console.log('a', boardList)
  return (
    <View>
      <TouchableHighlight
          onPress={() => { navigate('BoardDetail', { boardList, navigate }) }}>
          <Text>{ name }</Text>
      </TouchableHighlight>
      <Image
        style={ styles.image }
        resizeMode='cover'
        source={{ uri: thumbnailPhoto }}/>
    </View>
  )
}

Board.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string,
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    boardId: PropTypes.number
  })).isRequired,
  navigate: PropTypes.func.isRequired
}
