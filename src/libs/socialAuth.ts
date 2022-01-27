import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';

const FB_APP_ID = "453994219698212";
const GOOGLE_ANDROID_CLIENT_ID = "5092295624-jdt52qbtskthk5nn8eq6l8dt10tigij4.apps.googleusercontent.com"
const GOOGLE_IOS_CLIENT_ID = "5092295624-agqai1ge17q0bcp64emc4jlaalrrp65n.apps.googleusercontent.com"

WebBrowser.maybeCompleteAuthSession();

async function initFacebookLogin() {
  await Facebook.initializeAsync({
    appId: FB_APP_ID
  })
}

export async function handleFBLoginPress() {
  try {

    await initFacebookLogin();

    return await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile', 'email'],
    });

  } catch (error) {
    console.log(error);
    alert(`Facebook Login Error: ${error}`);
  }
};

export const sendGoogleLonginRequest = async () => {
  try {

    const config = {
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    }

    return await Google.logInAsync(config);
  } catch (e) {
    console.log('error', e);
  }
};