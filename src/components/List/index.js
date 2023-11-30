import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Task from '../Task'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import Toolbar from '../ToolBar'
import AddTaskModal from '../AddTaskModal'

const List = ({
  id,
  name,
  color,
  boardId,
  listName,
  selectList,
  tasks
}) => {
  const [taskName, setTaskName] = useState('')
  const [selectedTask, setSelectedTask] = useState([])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const taskList = tasks ? tasks.filter(t => t.listId === id) : []
  const backgroundStyles = {
    width: 300,
    height: 200,
    padding: 20,
    paddingBottom: 10,
    margin: 10,
    borderWidth: 10,
    borderColor: color,
    borderRadius: 20,
    backgroundColor: 'white'
  }
  const selectedStyle = {
    width: 300,
    height: 200,
    margin: 10,
    borderWidth: 10,
    borderColor: color,
    borderRadius: 20,
    backgroundColor: 'white',
    opacity: 0.5
  }

  const selectTask = name => {
    const task = data.tasks.find(t => t.name === name)
    setSelectedTask(task)
    setTaskName(name)
  }

  return (
    <View style= { listName === name ? selectedStyle : backgroundStyles }>
      <TouchableOpacity
        onPress={() => listName === name ? selectList('') : selectList(name)}>
        <Text style= { styles.title }>
          { name }
        </Text>
      </TouchableOpacity>
      {taskList.map(t => <Task key={t.id} {...t} selectTask={selectTask} taskName={taskName} />)}
      <Toolbar
        isTaskToolbar={true}
        hasSelected={taskName !== ''}
        onAdd={() => setIsAddModalOpen(true)} />
      <AddTaskModal
        defaultTask={tasks}
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}/>
    </View>
  )
}

List.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  boardId: PropTypes.number,
  listName: PropTypes.string.isRequired,
  selectList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isFinished: PropTypes.string,
    listId: PropTypes.number
  })).isRequired
}

export default List
