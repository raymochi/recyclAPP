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

  buttonText: {
    textAlign: 'center',
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: '800',
    color: 'rgb(34,34,76)'
  },

  buttonTextLarge: {
    textAlign: 'center',
    fontSize: 24,
    letterSpacing: 0.5,
    fontWeight: '800',
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

  buttonIcon: {
    height: 62,
    width: 62
  },

  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonIconLarge: {
    height: 110,
    width: 110
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
