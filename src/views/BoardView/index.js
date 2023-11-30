import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './styles'
import List from '../../components/List'
import { View } from 'react-native'
import Toolbar from '../../components/ToolBar'
import AddListModal from '../../components/AddListModal'

const BoardDetail = ({ route }) => {
  const { boardList, navigate } = route.params
  const [lists, setLists] = useState(data.lists)
  const [selectedList, setSelectedList] = useState([])
  const [listName, setListName] = useState('')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const deleteList = (listId) => {
    // Delete list logic
    const updatedLists = lists.filter((list) => list.id !== listId)
    setLists(updatedLists)
  }

  const selectList = name => {
    const list = data.lists.find(l => l.name === name)
    setSelectedList(list)
    setListName(name)
  }

  return (
    <View style={ styles.container }>
      <Toolbar
        hasSelected={listName !== ''}
        onAdd={() => setIsAddModalOpen(true)}
        onRemove={() => deleteList()} />
      <AddListModal
        defaultList={lists}
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}/>
      {boardList.map(t => <List key={t.id} {...t} tasks={data.tasks} navigate={navigate} selectList={selectList} listName={listName}/>)}
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
