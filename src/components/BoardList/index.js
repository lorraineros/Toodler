import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'
import { View } from 'react-native'
import Board from '../Board'

const BoardList = ({
  boards,
  selectBoard,
  boardName,
  navigate
}) => {
  return (
    <View style={ styles.container }>
      {boards.map(b => <Board key={b.id} {...b} lists={data.lists} boardName={boardName} selectBoard={selectBoard} navigate={navigate}/>)}
    </View>
  )
}

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string
  })).isRequired,
  boardName: PropTypes.string.isRequired,
  selectBoard: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired
}

export default BoardList
