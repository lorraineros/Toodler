import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React from 'react'
import { List } from '../../components/List'
import { View } from 'react-native'

const BoardDetail = ({ route }) => {
  const { boardList, navigate } = route.params
  return (
    <View>
      {boardList.map(t => <List key={t.id} {...t} tasks={data.tasks} navigate={navigate}/>)}
    </View>
  )
}

BoardDetail.navigationOptions = _ => ({
  title: 'BoardDetail'
})

BoardDetail.propTypes = {
  route: PropTypes.object.isRequired
}

export default BoardDetail
