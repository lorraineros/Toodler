import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './styles'
import Modal from '../Modal'
import { Text, TextInput, TouchableHighlight, View } from 'react-native'

const AddTaskModal = ({
  isOpen,
  defaultTask,
  submitModal,
  closeModal
}) => {
  const [name, setName] = useState(defaultTask?.name)
  const [description, setDescription] = useState(defaultTask?.description)
  const [isFinished, setIsFinished] = useState(defaultTask?.isFinished)
  const [ListId, setListId] = useState(defaultTask.ListId)

  return (
   <Modal
   isOpen={isOpen}
   closeModal={closeModal}>
   <View>
       <Text style={ styles.title }> Create new task </Text>
       <Text style= { styles.paragraph }> Name </Text>
       <TextInput
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
       <TextInput
         style={styles.textInput}
         autoFocus
         label="IsFinished"
         value={isFinished}
         onChangeText={text => setIsFinished(text)}
       />
       <TextInput
         style={styles.textInput}
         autoFocus
         label="ListId"
         value={ListId}
         onChangeText={text => setListId(text)}
       />
       <View styleName="horizontal" style={styles.toolbar}>
         <TouchableHighlight style={ styles.cancelButton } onPress={closeModal}>
           <Text style={ styles.buttonText }>Cancel</Text>
         </TouchableHighlight>
         <TouchableHighlight style={ styles.submitButton } onPress={submitModal}>
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
    ListId: PropTypes.number.isRequired
  }),
  isOpen: PropTypes.bool.isRequired,
  submitModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default AddTaskModal
