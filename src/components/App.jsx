import React from 'react';
import ColorPicker from './ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#d10f0f' },
  { label: 'green', color: '#17b514' },
  { label: 'blue', color: '#0cf2db' },
  { label: 'yellow', color: '#f2ee0c' },
  { label: 'orange', color: '#f29e0c' },
];

export const App = () => (
  <div>
    <ColorPicker options={colorPickerOptions} />
  </div>
);

// render() {
//     return (
//       <div className={css.ColorPicker}>
//         {this.props.options.map((option, index) => {
//           // Как дообавить несколько классов на один элемент:
//           // 1 - в переменную бросаем основной клас
//           const optionClasses = ['ColorPicker__option'];
//           //  2-   по условию, если индекс елемента на который мы нажимаем === actOptionIdx,
//           //  то в массив с основным индексом пушим дополнительный: получакм новый массив [ColorPicker__option, ColorPicker__option__active]
//           if (index === this.state.actOptionIdx) {
//             optionClasses.push('ColorPicker__option__active');
//           }
//           return (
//             <button
//               type="button"
//               key={option.label}
//               // 3 - в  className через переменную распыляем содержимое массива, разделив названием классов пробелом
//               // если их там два, то в className получим: className = ColorPicker__option  ColorPicker__option__active
//               className={optionClasses.join(' ')}
//               style={{
//                 backgroundColor: option.color,
//                 border:
//                   index === this.state.actOptionIdx
//                     ? '2px solid black'
//                     : 'none',
//               }}
//             ></button>
//           );
//         })}
//       </div>
//     );
//   }
