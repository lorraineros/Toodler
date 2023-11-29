import PropTypes from 'prop-types'
import React from 'react'
import { Task } from '../../components/List'
import { View } from 'react-native'

const ListDetail = ({ route }) => {
  const { listList } = route.params
  return (
    <View>
      {listList.map(t => <Task key={t.id} {...t} />)}
    </View>
  )
}

ListDetail.navigationOptions = _ => ({
  title: 'ListDetail'
})

ListDetail.propTypes = {
  route: PropTypes.object.isRequired
}

export default ListDetail
