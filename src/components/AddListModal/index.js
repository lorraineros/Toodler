import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Modal from '../Modal'
import { Text, TextInput, TouchableHighlight, View } from 'react-native'

const AddListModal = ({
  isOpen,
  defaultList,
  submitModal,
  closeModal
}) => {
  const [name, setName] = useState(defaultList?.name || '')
  const [color, setColor] = useState(defaultList?.color || '')

  useEffect(() => {
    if (defaultList) {
      setName(defaultList.name || '')
      setColor(defaultList.color || '')
    } else {
      setName('')
      setColor('')
    }
  }, [defaultList])

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}>
        <View>
          <Text style={ styles.title }> {defaultList ? 'Edit list' : 'Create new list'} </Text>
          <Text style={ styles.paragraph }>Name</Text>
          <TextInput
          style={ styles.textInput }
          autoFocus
          label="Name"
          value={name}
          onChangeText={text => setName(text)}
          />
          <Text style={ styles.paragraph }>Color</Text>
          <TextInput
          style={ styles.textInput }
          autoFocus
          label="Color"
          value={color}
          onChangeText={text => setColor(text)}
          />
          <View styleName="horizontal" style={styles.toolbar}>
            <TouchableHighlight style={ styles.cancelButton } onPress={closeModal}>
            <Text style={ styles.buttonText }>Cancel</Text>
            </TouchableHighlight>
            <TouchableHighlight style={ styles.submitButton } onPress={() => submitModal(name, color)}>
              <Text style={ styles.buttonText }>Confirm</Text>
            </TouchableHighlight>
          </View>
        </View>
    </Modal>
  )
}

AddListModal.propTypes = {
  defaultList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }),
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  submitModal: PropTypes.func.isRequired
}

export default AddListModal
