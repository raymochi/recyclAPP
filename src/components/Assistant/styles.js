import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
  },

  inputArea: {
    // margin: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    width: '100%',
    backgroundColor: 'white'
  },

  input: {
    padding: 4,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 4

  },

  chatBubble: {
    backgroundColor: '#add8e6',
    margin: 10,
    marginBottom: 5,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    // alignItems: 'center',
    maxWidth: '70%'
  },

  chatBubbleSelf: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    // alignItems: 'flex-end'
  }
});
