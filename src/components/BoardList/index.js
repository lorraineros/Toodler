import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from 'react-native'
import { Board } from '../Board'

export const BoardList = ({
  boards,
  navigate
}) => {
  return (
    <View>
      {boards.map(b => <Board key={b.id} {...b} lists={data.lists} navigate={navigate}/>)}
    </View>
  )
}

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string
  })).isRequired,
  navigate: PropTypes.func.isRequired
}
