import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from './styles';
import cameraImg from './assets/camera.png';
import settingsImg from './assets/settings.png';
import assistImg from './assets/assist.png';
import calenderImg from './assets/calender.png';

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerBackTitle: null,
      headerStyle: { backgroundColor: [0, 6].indexOf(new Date().getDay()) !== -1 || new Date().getHours() >= 19 || new Date().getHours() <= 7 ? '#52a676' : '#ec9b3f'  },
      headerRight: <TouchableHighlight underlayColor="#e6e6e6" style={{ marginRight: 10, padding: 6, backgroundColor: '#e1e1e1', borderRadius: 20 }} onPress={() => navigation.navigate('Settings')}>
        <Image source={settingsImg} style={{width: 20, height: 20}} />
      </TouchableHighlight>
    }
  }

  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{alignItems: 'center'}}style={styles.container}>
        <Text style={styles.title}>What would you like to do?</Text>
        <TouchableHighlight
          style={styles.homeButtonLarge}
          underlayColor="#e6e6e6"
          onPress={() => this.props.navigation.navigate('Assistant')}>
          <View>
            <Image source={assistImg} style={styles.buttonIconLarge} />
            <Text style={styles.buttonTextLarge}>Assistant</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.underButtons}>
          <TouchableHighlight
            style={styles.homeButton}
            underlayColor="#e6e6e6"
            onPress={() => this.props.navigation.navigate('Camera')}>
            <View className={styles.buttonContent}>
              <Image source={cameraImg} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Classifier</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.homeButton}
            underlayColor="#e6e6e6"
            onPress={() => this.props.navigation.navigate('Calender')}>
            <View className={styles.buttonContent}>
              <Image source={calenderImg} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Calender</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

Home.propTypes = {
};
