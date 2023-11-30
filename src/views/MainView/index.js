import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import BoardList from '../../components/BoardList'
import Toolbar from '../../components/ToolBar'
import AddBoardModal from '../../components/AddBoardModal'

const Main = ({ navigation: { navigate } }) => {
  const [boards, setBoards] = useState(data.boards)
  const [selectedBoard, setSelectedBoard] = useState()
  const [boardName, setBoardName] = useState('')
  const [loadingBoard, setLoadingBoard] = useState(true)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const deleteBoard = (boardId) => {
    // Delete board logic
    const updatedBoards = boards.filter((board) => board.id !== boardId)
    setBoards(updatedBoards)
  }

  const selectBoard = name => {
    const board = data.boards.find(b => b.name === name)
    setSelectedBoard(board)
    setBoardName(name)
  }

  return (
    <View style={styles.container}>
      <Toolbar
        hasSelected={boardName !== ''}
        onAdd={() => setIsAddModalOpen(true)} />
      <AddBoardModal
        defaultBoard={boards}
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}/>
      <BoardList navigate={navigate} boards={boards} deleteBoard={deleteBoard} selectBoard={selectBoard} boardName={boardName}/>
    </View>
  )
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default Main
