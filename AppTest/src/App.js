/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('React Native exercises');
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="increment"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Text>{counter}</Text>
    </View>
  );
};

export default App;
