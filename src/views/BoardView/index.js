import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import List from '../../components/List'
import { ScrollView, View } from 'react-native'
import Toolbar from '../../components/ToolBar'
import AddListModal from '../../components/AddListModal'

const BoardDetail = ({ route }) => {
  const { boardList, setBoardList, taskList, setTaskList, navigate } = route.params
  const [lists, setLists] = useState(boardList)
  const [selectedList, setSelectedList] = useState()
  const [listName, setListName] = useState('')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const boardId = boardList.length > 0 ? boardList[0].boardId : 0
  // const [isDeleteList, setIsDeletelist] = useState(false)

  useEffect(() => {
    setBoardList(lists)
    setTaskList(taskList)
  }, [lists, taskList])

  const addList = (name, color) => {
    const id = Math.max(...data.lists.map(l => l.id)) + 1
    const updatedLists = [...lists, {
      id,
      name,
      color,
      boardId
    }]
    setLists(updatedLists)
    setIsAddModalOpen(false)
  }

  const editList = (name, color) => {
    if (selectedList) {
      const updatedLists = lists.map((list) =>
        list.id === selectedList.id ? { ...list, name, color } : list
      )
      setLists(updatedLists)
      setListName(null)
      setIsAddModalOpen(false)
      setSelectedList(null)
    }
  }

  const selectList = name => {
    const list = lists.find(l => l.name === name)
    setSelectedList(list)
    setListName(name)
  }

  const deleteList = (id) => {
    if (selectedList) {
      setLists((prevList) => {
        const updatedList = prevList.filter((list) => list.id !== id)
        console.log(updatedList)
        return updatedList
        })
      setIsDeleteList(false)
    }
  }

  return (
    <ScrollView>
      <View style={ styles.container }>
        <Toolbar
          hasSelected={listName !== ''}
          onAdd={() => setIsAddModalOpen(true)}
          onEdit={() => setIsAddModalOpen(true)}
          />
        <AddListModal
          defaultList={selectedList}
          isOpen={isAddModalOpen}
          closeModal={() => setIsAddModalOpen(false)}
          submitModal={selectedList ? editList : addList}/>
        {lists.map(t => <List key={t.id} {...t} tasks={taskList} setTaskList={setTaskList} navigate={navigate} selectList={selectList} listName={listName}/>)}
      </View>
    </ScrollView>
  )
}

BoardDetail.navigationOptions = _ => ({
  title: 'BoardDetail'
})

BoardDetail.propTypes = {
  route: PropTypes.object.isRequired
}

export default BoardDetail
