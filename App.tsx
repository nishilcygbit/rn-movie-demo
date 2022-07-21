/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import Styles from './src/theme/Styles';
import MovieList from './src/containers/MovieList';
import WatchList from './src/containers/WatchList';
import MovieDetails from './src/containers/MovieDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <View style={[Styles.flex1]}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MovieList"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="MovieList" component={MovieList} />
            <Stack.Screen name="WatchList" component={WatchList} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};
export default App;
