import React, { Suspense, lazy } from 'react';

import { ActivityIndicator, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableScreens, enableFreeze } from 'react-native-screens';

import { Provider } from 'react-redux';

import { store } from './src/store/store';

enableScreens();
enableFreeze(true);

const Stack = createNativeStackNavigator();

const ProductScreen = lazy(() => import('./src/screens/ProductScreen'));

const ProductCart = lazy(() => import('./src/screens/ProductCart'));

const ProductList = lazy(() => import('./src/screens/ProductList'));

const Loader = React.memo(() => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Suspense fallback={<Loader />}>
          <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="ProductList" component={ProductList} />
            <Stack.Screen name="ProductCart" component={ProductCart} />
          </Stack.Navigator>
        </Suspense>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
