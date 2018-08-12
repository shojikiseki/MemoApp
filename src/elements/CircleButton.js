import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonTitle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    height: 50,
    width: 50,
    backgroundColor: '#e31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 30,
    lineHeight: 30,
    color: '#fff',
  },
});

export default CircleButton;
