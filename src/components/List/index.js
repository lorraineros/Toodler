import data from '../../resources/data.json'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
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
  tasks,
  setTaskList,
  deleteList
}) => {
  const [taskName, setTaskName] = useState('')
  const [selectedTask, setSelectedTask] = useState()
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isDeleteList, setIsDeleteList] = useState(false)
  const [taskList, setTasks] = useState(tasks ? tasks.filter(t => t.listId === id) : [])

  useEffect(() => {
    setTaskList(taskList)
  }, [taskList])

  const backgroundStyles = {
    width: 300,
    height: 300,
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
    height: 300,
    margin: 10,
    borderWidth: 10,
    borderColor: color,
    borderRadius: 20,
    backgroundColor: 'white',
    opacity: 0.5
  }

  const addTask = (name, description) => {
    const newId = Math.max(...taskList.map(t => t.id)) + 1
    const updatedTasks = [...taskList, {
      id: newId,
      name,
      description,
      isFinished: false,
      listId: id
    }]
    setTasks(updatedTasks)
    setIsAddModalOpen(false)
  }

  const editTask = (name, description, isFinished, listId) => {
    if (selectedTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id ? { ...task, name, description, isFinished, listId } : task
      )
      setTaskList(updatedTasks)
      setIsAddModalOpen(false)
      setSelectedTask(null)
    }
  }

  const selectTask = name => {
    const task = taskList.find(t => t.name === name)
    setSelectedTask(task)
    setTaskName(name)
  }

  const handleDeleteList = id => {
    deleteList(id)
    setIsDeleteList(true)
  }

  return (
    <View style= { listName === name ? selectedStyle : backgroundStyles }>
      <TouchableOpacity
        onPress={() => listName === name ? selectList('') : selectList(name)}>
        <Text style= { styles.title }>
          { name }
        </Text>
      </TouchableOpacity>
      <Toolbar
        isTaskToolbar={true}
        hasSelected={taskName !== ''}
        onAdd={() => setIsAddModalOpen(true)}
        onEdit={() => setIsAddModalOpen(true)}
        onDelete={() => setIsDeleteList(true)}
        style={ styles.toolbar }/>
      <AddTaskModal
        defaultTask={selectedTask}
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        submitModal={selectedTask ? editTask : addTask}/>
      {taskList.map(t => <Task key={t.id} {...t} selectTask={selectTask} taskName={taskName} />)}
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
  deleteList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isFinished: PropTypes.string,
    listId: PropTypes.number
  })).isRequired,
  setTaskList: PropTypes.func.isRequired
}

export default List
