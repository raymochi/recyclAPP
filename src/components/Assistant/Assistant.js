import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import getReply from './services/chatBot';
import styles from './styles';

const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;

export default class Assistant extends React.Component {
  static navigationOptions = ({ navigtion }) => {
    return {
      title: 'Terra',
      headerStyle: { backgroundColor: [0, 6].indexOf(new Date().getDay()) !== -1 || new Date().getHour() >= 19 || new Date().getHour() <= 7 ? '#52a676' : '#ec9b3f'  },
    }
  }

  constructor() {
    super();
    this.state = {
      text: '',
      isReplying: false
    }
  }

  componentDidMount() {
    if (this.props.chatLog && this.props.chatLog.length === 0) {
      this.setState({ isReplying: true });
      setTimeout(() => {
        this.props.addChatDialog({user: false, text: 'Hi, I\'m Terra'});
        setTimeout(() => {
          this.props.addChatDialog({user: false, text: 'I know a lot about recycling, how can I help you today?'});
          this.setState({ isReplying: false });
        }, 800)
      }, 400)
    }
    setTimeout(() => {
      if (this.scrollView) {
        this.scrollView.scrollToEnd();
      }
    }, 100)
  }

  submitChat() {
    this.props.addChatDialog({user: true, text: this.state.text});
    this.setState({ text: '' });
    setTimeout(() => {
      this.scrollView.scrollToEnd();
      this.setState({ isReplying: true });
      setTimeout(() => {
        this.props.addChatDialog({user: false, text: getReply(this.props.chatLog[this.props.chatLog.length - 1].text)});
        setTimeout(() => {
          this.setState({ isReplying: false });
          this.scrollView.scrollToEnd();
          if (this.props.chatLog[this.props.chatLog.length - 1].text === 'Let me take a look') {
            setTimeout(() => {
              this.props.navigation.navigate('Camera');
            }, 600)
          }
        }, 200)
      }, 600)
    }, 200)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView ref={ref => this.scrollView = ref}>
          { this.props.chatLog.map((chat, key) =>
            <View key={key} style={chat.user ? [styles.chatBubble, styles.chatBubbleSelf] : styles.chatBubble}>
              <Text>{chat.text}</Text>
            </View>
          )}
        </ScrollView>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={aspectRatio > 2 ? 108 : 64}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.inputArea}>
              <TextInput
                editable={!this.state.isReplying}
                style={styles.input}
                value={this.state.isReplying ? 'Replying..' : this.state.text}
                onChangeText={(text) => this.setState({ text })}
                onSubmitEditing={() => this.submitChat()} />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

Assistant.propTypes = {
};
