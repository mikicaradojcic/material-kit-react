import { useState, useEffect } from 'react';
import { directusService, anonimousDirectusService } from '../lib/directusService';

const useDirectusService = () => {

  const isAuthenticated = async () => {
    const token = await directusService.auth.token;
  console.log('token on is isAuthenticated', token);
    
    return !!token;
  }
  const signIn = (authCredentials) => {
    return directusService.auth.login(authCredentials);
  }

  const signOut = async () => {
    const toRet = await directusService.auth.logout();
    //directusService.auth.refresh();
    return toRet;
  }

  const getUser = async () => {
    if (isAuthenticated()) {
      return await directusService.users.me.read();
    }
    else return null;
  }

  return { isAuthenticated, directusService, anonimousDirectusService, getUser, signOut, signIn };
}

export default useDirectusService;