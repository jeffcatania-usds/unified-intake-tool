'use client'

import React, { createContext, useState } from 'react'

export const PRODUCT_TYPE = 'productType';

interface FormData {
  [key: string]: any;
};

interface FormDataContextType {
  formData: FormData;
  updateFormData: Function;
};

export const FormDataContext = createContext<FormDataContextType | null>(null);

const [formData, setFormData] = useState<FormData>({
  productType: ''
});

const updateFormData = (name : string, value : any) => {
  setFormData({
    ...formData,
    [name]: value,
  });
};

export default function FormDataProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <FormDataContext.Provider value={{ formData, updateFormData }}>{children}</FormDataContext.Provider>
}
