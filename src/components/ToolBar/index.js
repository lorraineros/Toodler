import PropTypes from 'prop-types'
import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import styles from './styles'

const Toolbar = ({ hasSelected, onAdd, onEdit, onDelete, isTaskToolbar }) => {
  return (
    <View styleName="horizontal" style={ isTaskToolbar ? styles.taskToolbar : styles.toolbar}>
      <TouchableHighlight
        style={styles.toolbarAction}
        onPress={onAdd}
        disabled={hasSelected}>
        <Text style={[styles.toolbarActionText, hasSelected ? { color: 'rgba(155, 155, 155, .5)' } : {}]}>Create</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.toolbarAction}
        onPress={onEdit}
        disabled={!hasSelected}>
        <Text style={[styles.toolbarActionText, !hasSelected ? { color: 'rgba(155, 155, 155, .5)' } : {}]}>Modify</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.toolbarAction}
        onPress={onDelete}
        disabled={!hasSelected}>
        <Text style={[styles.toolbarActionText, !hasSelected ? { color: 'rgba(155, 155, 155, .5)' } : {}]}>Delete</Text>
      </TouchableHighlight>
    </View>
  )
}

Toolbar.propTypes = {
  hasSelected: PropTypes.bool.isRequired,
  isTaskToolbar: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Toolbar
