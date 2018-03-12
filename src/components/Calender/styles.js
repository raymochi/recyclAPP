import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  title: {
    textAlign: 'center',
    margin: 16,
    lineHeight: 40,
    fontSize: 28,
    letterSpacing: 0.5,
    fontWeight: '700',
    color: 'rgb(34,34,76)'
  },

  homeButtonLarge: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 240,
    height: 240,
    borderRadius: 4,
    backgroundColor: '#e1e1e1',
  },

  underButtons: {
    flexDirection: 'row'
  },

  homeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 110,
    height: 110,
    borderRadius: 4,
    backgroundColor: '#e1e1e1',
  }
});
