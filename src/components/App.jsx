import React from 'react';
import ColorPicker from './ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#d10f0f' },
  { label: 'green', color: '#17b514' },
  { label: 'blue', color: '#0cf2db' },
  { label: 'yellow', color: '#f2ee0c' },
  { label: 'violet', color: '#ed1ba4' },
  { label: 'orange', color: '#f29e0c' },
];

export const App = () => (
  <div>
    <ColorPicker options={colorPickerOptions} />
  </div>
);
