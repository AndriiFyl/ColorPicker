import React from 'react';
import css from './ColorPicker.module.css';
// пакет для составления динамических классов в компоненте
import classNames from 'classnames';

class ColorPicker extends React.Component {
  state = {
    actOptionIdx: 0,
  };

  // метод для получения  активного индекса (при клике на кнопку)
  setActiveIdx = index => {
    this.setState({ actOptionIdx: index });
  };
  // МЕТОД ДОБАВЛЕНИЯ ДОПКЛАССА ЧЕРЕЗ ПАКЕТ classNames==========================================================
  // вызываем ф-ю classNames и передаем в нее класс, который должен быть по умолчанию - как аргуметнт,
  // после чего передаю обэект, в котором указываю динамические классы, которые добавляем в зависимости от условия
  makeOptionClassName = index => {
    return classNames(css.ColorPicker__option, {
      [css.ColorPicker__option__active]: index === this.state.actOptionIdx,
    });
  };

  //  СТАРАЯ ВЕРСИЯ ДОБАВЛЕНИЯ ДОПКЛАССА НА ЕЛЕМЕНТ==============================================================
  // создаем метод класса для добавления дополнительного класса
  // makeOptionClassName = index => {
  //   //1 - в переменную бросаем основной клас
  //   const optionClasses = [css.ColorPicker__option];
  //   //  2-   по условию, если индекс елемента на который мы нажимаем === actOptionIdx,
  //   //  то в массив с основным классом пушим дополнительный: получаeм
  //   // новый массив[ColorPicker__option, ColorPicker__option__active]
  //   if (index === this.state.actOptionIdx) {
  //     optionClasses.push(css.ColorPicker__option__active);
  //   }
  //   // возвращаем из метода makeOptionClassName наши классы из массива optionClasses (разделив пробелом)
  //   // например css.ColorPicker__option  css.ColorPicker__option__active
  //   return optionClasses.join(' ');
  // };

  render() {
    // деструктуризируем пропсы, стейт, методы
    const { options } = this.props;
    const { actOptionIdx } = this.state;
    const { makeOptionClassName, setActiveIdx } = this;

    // Вычисляемые свойства делаем в методе render (вычисляются на базе пропсов и стейта)
    const currentColor = options[actOptionIdx];

    return (
      <div className={css.ColorPicker}>
        <p className={css.ColorName}>
          You chose color:
          <span
            style={{
              color: currentColor.color,
              marginLeft: '10px',
              fontWeight: '600',
            }}
          >
            {currentColor.label}
          </span>
        </p>
        {options.map(({ label, color }, index) => (
          <button
            type="button"
            key={label}
            //  результат вызова метода класса makeOptionClassName запишем в наш класс
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            // React под капотом вешает слушателя событий на каждый элемент (onClick, onSubmit, onChange)
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    );
  }
}

export default ColorPicker;
