import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgb(0,0,0)'
  },

  cameraButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cameraButton__Icon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red'
  }
});
