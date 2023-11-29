import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'

export const Task = ({
  id,
  name,
  description,
  isFinished,
  listId
}) => (
    <Text>{ name }</Text>
)

Task.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFinished: PropTypes.string,
  listId: PropTypes.number
}
