'use client'

import React, { createContext, useState, useContext } from 'react'

export const PRODUCT_TYPE = 'productType';
export const SUBMISSION_TYPE = 'submissionType';
export const BARCODE = 'barcode';
export const NDC_NUMBER = 'ndcNumber';

interface FormData {
  [key: string]: string | Array<string>;
};

interface FormDataContextType {
  formData: FormData;
  updateFormData: (name: string, value: string | Array<string>) => void;
};

export const FormDataContext = createContext<FormDataContextType | null>(null);

export default function FormDataProvider({
  children,
}: {
  children: React.ReactNode
}) {
    const [formData, setFormData] = useState<FormData>({
      PRODUCT_TYPE: '',
      SUBMISSION_TYPE: [],
      BARCODE: '',
      NDC_NUMBER: ''
    });
    
    const updateFormData = (name : string, value : string | Array<string>) => {
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