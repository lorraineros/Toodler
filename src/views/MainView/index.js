import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    (async () => {
      const images = await fileService.getAllImages()
      setImage(images)
    })()
  }, [])

  const addBoard = (name, description, thumbnailPhoto) => {
    const id = Math.max(...boards.map(b => b.id)) + 1
    const updatedBoards = [...boards, {
      id,
      name,
      description,
      thumbnailPhoto
    }]
    setBoards(updatedBoards)
    setIsAddModalOpen(false)
  }

  const editBoard = (name, description, thumbnailPhoto) => {
    if (selectedBoard) {
      const updatedBoards = boards.map((board) =>
        board.id === selectedBoard.id ? { ...board, name, description, thumbnailPhoto } : board
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
    try {
      const photo = await imageService.selectFromCameraRoll()
      console.log(photo)
      if (photo) {
        await addImage(photo)
      }
    } catch (error) {
      console.error('Error selecting photo:', error)
    }
  }

  const addImage = async image => {
    try {
      const newImage = await fileService.addImage(image)
      console.log(newImage.name)
      setImage(newImage)
      setIsAddModalOpen(false)
    } catch (error) {
      console.error('Error adding image:', error)
    }
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
          submitModal={selectedBoard ? editBoard : addBoard}/>
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
