import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import styles from './styles'
import AddBoardModal from '../../components/AddBoardModal'
import BoardList from '../../components/BoardList'
import Toolbar from '../../components/ToolBar'
import * as imageService from '../../services/imageService'
import * as fileService from '../../services/fileService'

const Main = ({ navigation: { navigate } }) => {
  const [boards, setBoards] = useState(data.boards || [])
  const [selectedBoard, setSelectedBoard] = useState()
  const [boardName, setBoardName] = useState('')
  const [image, setImage] = useState()
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const addBoard = (name, description, thumbnailPhoto, image) => {
    const id = Math.max(...boards.map(b => b.id)) + 1
    if (thumbnailPhoto) {
      image = null
    }
    const updatedBoards = [...boards, {
      id,
      name,
      description,
      thumbnailPhoto,
      image
    }]
    setBoards(updatedBoards)
    setIsAddModalOpen(false)
  }

  const editBoard = (name, description, thumbnailPhoto, image) => {
    if (thumbnailPhoto) {
      image = null
    }
    if (selectedBoard) {
      const updatedBoards = boards.map((board) =>
        board.id === selectedBoard.id ? { ...board, name, description, thumbnailPhoto, image } : board
      )
      setBoards(updatedBoards)
      setIsAddModalOpen(false)
      setSelectedBoard(null)
    }
  }

  const deleteBoard = (boardId) => {
    // Delete board logic
    const updatedBoards = boards.filter((board) => board.id !== boardId)
    setBoards(updatedBoards)
  }

  const selectBoard = name => {
    const board = boards.find(b => b.name === name)
    setSelectedBoard(board)
    setBoardName(name)
  }

  const selectPhoto = async () => {
    const photo = await imageService.selectFromCameraRoll()
    if (photo) {
      await addImage(photo)
    }
  }

  const addImage = async image => {
    const newImage = await fileService.addImage(image)
    setImage(newImage)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Toolbar
          hasSelected={boardName !== ''}
          onAdd={() => setIsAddModalOpen(true)}
          onEdit={() => setIsAddModalOpen(true)} />
        <AddBoardModal
          defaultBoard={selectedBoard}
          isOpen={isAddModalOpen}
          selectPhoto={() => selectPhoto()}
          closeModal={() => setIsAddModalOpen(false)}
          submitModal={selectedBoard ? editBoard : addBoard}
          image={image}/>
        <BoardList navigate={navigate} boards={boards} deleteBoard={deleteBoard} selectBoard={selectBoard} boardName={boardName}/>
      </View>
    </ScrollView>
  )
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default Main
