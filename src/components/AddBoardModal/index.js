import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Text, TextInput, View, TouchableHighlight } from 'react-native'
import Modal from '../Modal'

const AddBoardModal = ({
  defaultBoard,
  isOpen,
  submitModal,
  closeModal
}) => {
  const [name, setName] = useState(defaultBoard?.name || '')
  const [description, setDescription] = useState(defaultBoard?.description || '')
  const [thumbnailPhoto, setThumbnailPhoto] = useState(defaultBoard?.thumbnailPhoto || '')

  useEffect(() => {
    if (defaultBoard) {
      setName(defaultBoard.name || '')
      setDescription(defaultBoard.description || '')
      setThumbnailPhoto(defaultBoard.thumbnailPhoto || '')
    } else {
      setName('')
      setDescription('')
      setThumbnailPhoto('')
    }
  }, [defaultBoard])

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}>
      <View>
        <Text style={styles.title}>{defaultBoard ? 'Edit board' : 'Create new board'}</Text>
        <Text style={styles.paragraph}> Name </Text>
        <TextInput
          style={styles.textInput}
          autoFocus
          label="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Text style={styles.paragraph}> Description </Text>
        <TextInput
          style={styles.textInput}
          autoFocus
          label="Description"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <Text style={styles.paragraph}> Thumbnail Photo </Text>
        <TextInput
          style={styles.textInput}
          autoFocus
          label="ThumbnailPhoto"
          value={thumbnailPhoto}
          onChangeText={text => setThumbnailPhoto(text)}
        />
        <View styleName="horizontal" style={styles.toolbar}>
          <TouchableHighlight style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.submitButton} onPress={() => submitModal(name, description, thumbnailPhoto)}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}

AddBoardModal.propTypes = {
  defaultBoard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnailPhoto: PropTypes.string.isRequired
  }),
  isOpen: PropTypes.bool.isRequired,
  submitModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default AddBoardModal
