import { useState, useEffect } from 'react';
import { directusService } from '../lib/directusService';

const useDirectusService = () => {

  const isAuthenticated = async () => {
    const token = await directusService.auth.token;

    if (token) {
      await directusService.auth.refreshIfExpired();
    }
    return !!token;
  }
  const signIn = (authCredentials) => {
    return directusService.auth.login(authCredentials);
  }

  const signOut = async () => {
    return await directusService.auth.logout();
  }

  const getUser = async () => {
    if (isAuthenticated()) {
      return await directusService.users.me.read();
    }
    else return null;
  }

  return { isAuthenticated, directusService, getUser, signOut, signIn };
}

export default useDirectusService;