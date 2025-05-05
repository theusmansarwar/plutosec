'use client';
import React from 'react';
import { useLanguage } from "@/Context/LanguageContext";

const HtmlWrapper = ({ children }) => {
  const { language } = useLanguage();
  return <html lang={language.toLowerCase()}>{children}</html>;
};

export default HtmlWrapper;
