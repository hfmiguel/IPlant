import React from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import Toast from 'react-native-toast-message';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';



export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  // ENQUANTO AS FONTES DO SISTEMA NAO FOREM CARREGDAS , NAO IRA AVANÇAR COM O APP
  if (!fontsLoaded)
    return <AppLoading />

  return (
  <>
      <Routes />
      <Toast ref={(ref) => Toast.setRef(ref)} />
  </>
  )
}
