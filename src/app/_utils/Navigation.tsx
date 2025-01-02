'use client'

import { UserData, PRODUCT_TYPE, SUBMISSION_TYPE } from '../_contexts/UserDataProvider'

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
  createScreenConditional(
    'NDCNumber', 
    '/FlowA/NDCNumber', 
    (userData: UserData) => {
      return userData[PRODUCT_TYPE] === 'drugProductType';
    }
  ),
  createScreen('ProductPhotos', '/FlowA/ProductPhotos'),
  createScreen('ProductName', '/FlowA/ProductName'),
  createScreen('WhatHappened', '/FlowA/WhatHappened'),
  createScreen('EventDate', '/FlowA/EventDate'),
  createScreenConditional(
    'HarmedPerson', 
    '/FlowA/HarmedPerson',
    (userData: UserData) => {
      return userData[SUBMISSION_TYPE]?.includes('someoneWasHarmedSubmissionType');
    }
  ),
  createScreen('ContactInfo', '/FlowA/ContactInfo'),
  createScreen('AdditionalFiles', '/FlowA/AdditionalFiles')
];

function createScreen(name: string, route: string) {
  return {
    name: name,
    route: route,
    shouldDisplay: () => {return true;}
  } as Screen;
}

function createScreenConditional(name: string, route: string, shouldDisplayFn: (userData: UserData) => boolean) {
  return {
    name: name,
    route: route,
    shouldDisplay: shouldDisplayFn
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

