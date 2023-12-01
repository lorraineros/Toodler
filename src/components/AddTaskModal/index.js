import Checkbox from 'expo-checkbox'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Modal from '../Modal'
import { Text, TextInput, TouchableHighlight, View } from 'react-native'

const AddTaskModal = ({
  isOpen,
  defaultTask,
  submitModal,
  closeModal
}) => {
  const [name, setName] = useState(defaultTask?.name || '')
  const [description, setDescription] = useState(defaultTask?.description || '')
  const [isFinished, setIsFinished] = useState(defaultTask?.isFinished || false)
  const [listId, setListId] = useState(defaultTask?.listId || '')

  useEffect(() => {
    if (defaultTask) {
      console.log('task:', defaultTask)
      setName(defaultTask.name || '')
      setDescription(defaultTask.description || '')
      setIsFinished(defaultTask.isFinished || false)
      setListId(defaultTask.listId || '')
    } else {
      setName('')
      setDescription('')
      setIsFinished(false)
      setListId('')
    }
  }, [defaultTask])

  return (
   <Modal
   isOpen={isOpen}
   closeModal={closeModal}>
   <View>
       <Text style={ styles.title }> {defaultTask ? 'Edit task' : 'Create new task'} </Text>
       <Text style= { styles.paragraph }> Name </Text>
       <TextInput
         style= {styles.textInput }
         autoFocus
         label="Name"
         value={name}
         onChangeText={text => setName(text)}
       />
       <Text style= { styles.paragraph }> Description </Text>
       <TextInput
         style= {styles.textInput }
         autoFocus
         label="Description"
         value={description}
         onChangeText={text => setDescription(text)}
       />
       {defaultTask && (
        <View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.paragraph}>Finished?</Text>
            <Checkbox
              style={styles.checkbox}
              value={isFinished}
              onValueChange={(value) => setIsFinished(value)}
            />
          </View>
          <Text style={styles.paragraph}>List ID</Text>
          <TextInput
            style={styles.textInput}
            autoFocus
            label="List ID"
            value={listId.toString()}
            onChangeText={(text) => setListId(text)}
          />
        </View>
       )}
       <View styleName="horizontal" style={styles.toolbar}>
         <TouchableHighlight style={ styles.cancelButton } onPress={closeModal}>
           <Text style={ styles.buttonText }>Cancel</Text>
         </TouchableHighlight>
         <TouchableHighlight style={ styles.submitButton } onPress={() => submitModal(name, description, isFinished, listId)}>
            <Text style={ styles.buttonText }>Confirm</Text>
          </TouchableHighlight>
       </View>
     </View>
    </Modal>
  )
}

AddTaskModal.propTypes = {
  defaultTask: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
    listId: PropTypes.number.isRequired
  }),
  isOpen: PropTypes.bool.isRequired,
  submitModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default AddTaskModal
