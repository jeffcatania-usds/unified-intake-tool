'use client'

import React, { createContext, useState, useContext } from 'react'

export const PRODUCT_TYPE = 'productType';

interface FormData {
  [key: string]: string;
};

interface FormDataContextType {
  formData: FormData;
  updateFormData: (name: string, value: string) => void;
};

export const FormDataContext = createContext<FormDataContextType | null>(null);

export default function FormDataProvider({
  children,
}: {
  children: React.ReactNode
}) {
    const [formData, setFormData] = useState<FormData>({
      productType: ''
    });
    
    const updateFormData = (name : string, value : string) => {
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    return <FormDataContext.Provider value={{ formData, updateFormData }}>{children}</FormDataContext.Provider>
}

export const useFormDataContext = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("FormDataContext must be used within a FormDataProvider");
  }
  return context;
};