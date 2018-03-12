import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Text,
  TouchableHighlight,
  View,
  Image,
  NativeModules
} from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import RNFS from 'react-native-fs';
import RNCamera from 'react-native-camera';
import Clarifai from 'clarifai';
import Config from 'react-native-config';
import styles from './styles';

const CLARIFAI_API_KEY = Config.CLARIFAI_API_KEY;

const clarifaiApp = new Clarifai.App({
  'apiKey': CLARIFAI_API_KEY
});

const metal = ['steel', 'metallic', 'alluminum'];
const glass = ['glass items', 'glass'];
const plastic = ['bottle', 'plastic', 'knife', 'cutlery', 'fork'];
// const wood = ['pencil', 'wood'];
const paper = ['notebook', 'paper', 'document', 'page', 'plate', 'dishware', 'cup', 'ceramic'];

process.nextTick = setImmediate;

export default class Camera extends React.Component {
  static navigationOptions = ({ navigtion }) => {
    return {
      title: 'Classifier',
    }
  }
  constructor() {
    super();
    this.state = {
      picture: {},
      showConfirm: false
    }
  }

  classifyItem(concepts) {
    console.log('classifying', concepts);
    let type = 'Garbage';
    for (let i = 0; i < concepts.length; i++) {
      if (plastic.includes(concepts[i].name)) {
        type = 'plastic';
        break;
      } else if (paper.includes(concepts[i].name)) {
        type = 'paper';
        break;
      } else if (metal.includes(concepts[i].name)) {
        type = 'metal';
        break;
      } else if (glass.includes(concepts[i].name)) {
        type = 'glass';
        break;
      } else if (concepts[i].name === 'unhealthy') {
        type = 'unhealthy';
        break;
      }
    }
    if (type === 'Garbage') {
      Alert.alert('Garbage', 'Please throw out your trash', [{text: 'Ok', onPress: () => this.props.navigation.goBack(), style: 'cancel'}], { cancelable: false });
    } else if (type === 'unhealthy') {
      Alert.alert('Unhealthy', 'Please eat healthier and throw out the trash', [{text: 'Ok', onPress: () => this.props.navigation.goBack(), style: 'cancel'}], { cancelable: false });
    } else {
      Alert.alert('Recyclable!', `Please recycle your ${type} item`, [{text: 'Ok', onPress: () => this.props.navigation.goBack(), style: 'cancel'}], { cancelable: false });
    }
  }

  takePicture() {
    this.camera.capture({ metadata: {} }).then((data) => {
      this.props.navigation.setParams({ showConfirm: true });
      this.setState({ picture: data });
      return RNFS.readFile(data.path, 'base64');
    }).then((base64) => {
      clarifaiApp.models.predict(Clarifai.GENERAL_MODEL, {base64: base64}).then(
        (res) => {
          this.classifyItem(res.outputs[0].data.concepts);
          return RNFS.unlink(this.state.picture.path);
        },
        (err) => {
          console.log('err', err);
      });
    }).then((res) => {
      console.log('attachment successfully unlinked');
    }).catch((err) => {
      console.log('err taking pic', err);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { !this.state.picture.path
          ? <View style={styles.container}>
            <RNCamera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              captureQuality={RNCamera.constants.CaptureQuality["480p"]}
              captureTarget={RNCamera.constants.CaptureTarget.disk}
              type={'back'}
              aspect={RNCamera.constants.Aspect.fill}
            />
            <TouchableHighlight onPress={() => this.takePicture()} style={styles.cameraButton}>
              <View style={styles.cameraButton__Icon} />
            </TouchableHighlight>
          </View>
          : <Image source={{ uri: this.state.picture.path }} style={styles.preview} />
        }
      </View>
    );
  }
}

Camera.propTypes = {
};
