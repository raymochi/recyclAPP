import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ScrollView,
  View,
  TouchableHighlight
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from './styles';

export default class Calender extends React.Component {
  static navigationOptions = ({ navigtion }) => {
    return {
      title: 'Calendar',
      headerStyle: { backgroundColor: [0, 6].indexOf(new Date().getDay()) !== -1 || new Date().getHours() >= 19 || new Date().getHours() <= 7 ? '#52a676' : '#ec9b3f' },
    }
  }

  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Calendar
          // Initially visible month. Default = Date()
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => (<Arrow />)}
          // Do not show days of other months in month page. Default = false
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          markedDates={{
            '2018-03-03': { marked: true },
            '2018-03-04': { marked: true },
            '2018-03-10': { marked: true },
            '2018-03-11': { marked: true },
            '2018-03-17': { marked: true },
            '2018-03-18': { marked: true },
            '2018-03-24': { marked: true },
            '2018-03-25': { marked: true },
            '2018-03-31': { marked: true },
            '2018-03-30': { marked: true },
            '2018-04-01': { marked: true },
            '2018-04-01': { marked: true },
            '2018-04-01': { marked: true },
            '2018-03-08': { selected: true },
            '2018-03-22': { selected: true },
          }}
          theme={{
            selectedDotColor: '#52a676'
          }}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          // Show week numbers to the left. Default = false
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        />
      </View>
    );
  }
}

Calender.propTypes = {
};
