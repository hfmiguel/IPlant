import { useNavigation, NavigationProp } from '@react-navigation/core';
import * as React from 'react';
import { handleFBLoginPress, sendGoogleLonginRequest } from '../libs/socialAuth';
import { saveUser } from '../libs/storage';
import { Toasts } from "./Toast";
import { FacebookSocialButton, GoogleSocialButton } from "react-native-social-buttons";


async function HandleGoogleLoginPress(navigation: NavigationProp<any, any>) {
  const result = await sendGoogleLonginRequest();
  if (!result || !result.user) {
    return (
      Toasts({
        type: "error",
        title: "Ops! 😯",
        content: "Não foi possível realizar o login, tente novamente",
        position: "top",
      })
    )
  }

  const user = result.user;

  return (
    Toasts({
      type: "success",
      title: "Ops! 🎉",
      content: `Olá ${user.name}, você está conectado`,
      position: "top",
      onHide: () => {
        saveUser(user);
        if (typeof navigation.navigate != undefined && navigation.navigate != null) {
          navigation.navigate('PlantSelect')
        }
      },
    })
  )

}

export function FacebookLogin() {
  return (
    <FacebookSocialButton onPress={() => handleFBLoginPress()} />
  )
}

export function GoogleLogin() {
  const navigation = useNavigation();
  return (
    <GoogleSocialButton onPress={() => HandleGoogleLoginPress(navigation)} />
  )
}
