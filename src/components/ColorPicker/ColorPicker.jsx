import React from 'react';
import css from './ColorPicker.module.css';

class ColorPicker extends React.Component {
  state = {
    actOptionIdx: 2,
  };

  render() {
    return (
      <div className={css.ColorPicker}>
        {this.props.options.map((option, index) => {
          const optionClasses = [css.ColorPicker__option];
          if (index === this.state.actOptionIdx) {
            optionClasses.push(css.ColorPicker__option__active);
          }

          return (
            <button
              type="button"
              key={option.label}
              className={optionClasses.join(' ')}
              style={{
                backgroundColor: option.color,
                border:
                  index === this.state.actOptionIdx
                    ? '2px solid black'
                    : 'none',
              }}
            ></button>
          );
        })}
      </div>
    );
  }
}

export default ColorPicker;
