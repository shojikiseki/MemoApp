import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>プログラミングレッスン案</Text>
              <Text style={styles.memoHeaderDate}>2018/08/18</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>以下はレッスンの内容です。{'\n'}</Text>
          <Text>
            ・HTML, CSSの基礎{'\n'}
            ・JavaScript, jQueryの基礎{'\n'}
            ・PHP, MySQLの基礎{'\n'}
            ・ネットワークについて{'\n'}
            ・サーバーについて{'\n'}
            ・オブジェクト指向について{'\n'}
            ・WordPress{'\n'}
            ・PHPフレームワーク{'\n'}
            ・Webサービス構築{'\n'}
          </Text>
        </View>

        <CircleButton color="white" style={styles.editButton} onPress={() => { this.props.navigation.navigate('MemoEdit'); }}>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 11,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
