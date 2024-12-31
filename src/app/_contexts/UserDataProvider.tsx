'use client'

import React, { createContext, useState, useContext } from 'react'

export const PRODUCT_TYPE = 'productType';
export const SUBMISSION_TYPE = 'submissionType';
export const BARCODE = 'barcode';
export const NDC_NUMBER = 'ndcNumber';
export const PRODUCT_PHOTOS = 'productPhotos';
export const PRODUCT_NAME = 'productName';
export const WHAT_HAPPENED = 'whatHappened';

export interface UserData {
  [key: string]: string | Array<string>;
};

export interface UserDataContextType {
  userData: UserData;
  updateUserData: (name: string, value: string | Array<string>) => void;
};

export const UserDataContext = createContext<UserDataContextType | null>(null);

export default function UserDataProvider({
  children,
}: {
  children: React.ReactNode
}) {
    const [userData, setUserData] = useState<UserData>({
      PRODUCT_TYPE: '',
      SUBMISSION_TYPE: [],
      BARCODE: '',
      NDC_NUMBER: '',
      PRODUCT_NAME: '',
      WHAT_HAPPENED: ''
    });
    
    const updateUserData = (name : string, value : string | Array<string>) => {
      setUserData({
        ...userData,
        [name]: value,
      });
    };
    return <UserDataContext.Provider value={{ userData, updateUserData }}>{children}</UserDataContext.Provider>
}

export const useUserDataContext = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("UserDataContext must be used within a UserDataProvider");
  }
  return context;
};