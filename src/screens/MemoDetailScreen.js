import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <View style={styles.memoHeader}>
            <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2018/08/13</Text>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>講座のアイデアです</Text>
        </View>

        <CircleButton>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoHadere: {

  },
  memoHeaderTitle: {

  },
  memoHederDate: {

  },
});

export default MemoDetailScreen;
