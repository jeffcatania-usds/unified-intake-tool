'use client'

import { UserData } from '../_contexts/UserDataProvider'

interface Screen {
  name: string;
  route: string;
  shouldDisplay: (userData: UserData) => boolean;
};

const screenOrder: Array<Screen> = [
  createScreen('Landing', '/'),
  createScreen('FlowAOverview', '/FlowA'),
  createScreen('ProductType', '/FlowA/ProductType'),
  createScreen('SubmissionType', '/FlowA/SubmissionType'),
  createScreen('ScanBarcode', '/FlowA/ScanBarcode'),
  createScreen('NDCNumber', '/FlowA/NDCNumber'),
  createScreen('ProductPhotos', '/FlowA/ProductPhotos'),
  createScreen('ProductName', '/FlowA/ProductName'),
  createScreen('WhatHappened', '/FlowA/WhatHappened'),
  createScreen('EventDate', '/FlowA/EventDate')
];

function createScreen(name: string, route: string) {
  return {
    name: name,
    route: route,
    shouldDisplay: () => {return true;}
  } as Screen;
}

export const previousScreen = (currentScreen: string, userData: UserData) => {
  // If current screen is the first screen that should be displayed, return an empty string
  let prevScreen = '';
  for (const screen of screenOrder) {
    if(screen.name === currentScreen) {
      return prevScreen;
    } else if (screen.shouldDisplay(userData)) {
      prevScreen = screen.route;
    }
  }
  // If current screen is not found, return an empty string
  return '';
};

export const nextScreen = (currentScreen: string, userData: UserData) => {
  let foundScreen = false;
  for (const screen of screenOrder) {
    if(screen.name === currentScreen) {
      foundScreen = true;
    } else if (foundScreen && screen.shouldDisplay(userData)) {
      return screen.route;
    }
  }
  // If current screen is not found or is the last screen that should be displayed, return an empty string
  return '';
};

