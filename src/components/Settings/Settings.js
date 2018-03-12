import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  TextInput,
  Picker
} from 'react-native';
import styles from './styles';

export default class Settings extends React.Component {
  static navigationOptions = ({ navigtion }) => {
    return {
      title: 'Settings',
    }
  }

  constructor() {
    super();
    this.state = {
      country: 'Canada',
      city: 'Whitby'
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.country}
          onValueChange={(itemValue, itemIndex) => this.setState({country: itemValue})}>
          <Picker.Item label="Canada" value="Canada" />
          <Picker.Item label="USA" value="USA" />
        </Picker>
        <Picker
          selectedValue={this.state.city}
          onValueChange={(itemValue, itemIndex) => this.setState({city: itemValue})}>
          <Picker.Item label={this.state.country === 'Canada' ? 'Vancouver' : 'New York'} value="Oshawa" />
          <Picker.Item label={this.state.country === 'Canada' ? 'Whitby' : 'Chicago'} value="Whitby" />
          <Picker.Item label={this.state.country === 'Canada' ? 'Toronto' : 'San Francisco'} value="Ajax" />
          <Picker.Item label={this.state.country === 'Canada' ? 'Calgary' : 'Seattle'} value="Pickering" />
        </Picker>
      </View>
    );
  }
}

Settings.propTypes = {
};
