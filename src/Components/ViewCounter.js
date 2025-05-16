// app/Components/ViewCounter.js
'use client';

import { countView } from '@/DAL/create';
import { useEffect } from 'react';

export default function ViewCounter() {
  useEffect(() => {
    countView();
  }, []);

  return null;
}
