import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'

import { counterIncrease } from '../actions'

function Home(props) {
  const { navigation, counter, increaseCounter } = props

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button
        title="Increase"
        onPress={increaseCounter}
      />

      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increaseCounter: () => {
      dispatch(counterIncrease());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
