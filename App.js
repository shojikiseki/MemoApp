import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>MEMOT</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>hogahoga</Text>
            <Text style={styles.memoDate}>hugahuga</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>hogahoga</Text>
            <Text style={styles.memoDate}>hugahuga</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>hogahoga</Text>
            <Text style={styles.memoDate}>hugahuga</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>hogahoga</Text>
            <Text style={styles.memoDate}>hugahuga</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#265366',
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
});
