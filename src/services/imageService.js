import * as ImagePicker from 'expo-image-picker'

const CAMERA_ROLL = 'CAMERA_ROLL'

const getPermission = async permissionTypes => {
  if (permissionTypes.indexOf(CAMERA_ROLL) >= 0) {
    await ImagePicker.requestMediaLibraryPermissionsAsync()
  }
}

export const selectFromCameraRoll = async () => {
  try {
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
      base64: true,
      aspect: [16, 9]
    })

    if (result.cancelled) {
      return null // Return null if the selection was cancelled
    }

    return result.uri // Return the image URI
  } catch (error) {
    console.error('Error selecting from camera roll:', error)
    throw error // Rethrow the error to be caught by the calling function
  }
}
