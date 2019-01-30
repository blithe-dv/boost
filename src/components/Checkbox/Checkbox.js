// @flow

import React, { PureComponent } from 'react';

import { Icon } from '../Icon';
import { CheckboxSquareTag, CheckboxTag, CheckboxWrapperTag, CheckboxTextTag, CheckboxIconTag } from './Checkbox.theme';

type CheckboxProps = {
  /** checkbox name */
  name?: string,
  /** checkbox label */
  label?: string,
  /** checked state */
  checked?: boolean,
  /** when error then show error styles */
  hasError?: boolean,
  /** show disabled styles  */
  disabled?: boolean,
  /** no wrap text  */
  nowrap?: boolean,

  /** callback to change chcked state */
  onChange?: (boolean, SyntheticInputEvent<HTMLInputElement>) => void,
  onFocus?: (?SyntheticFocusEvent<HTMLInputElement>) => void,
  onBlur?: (?SyntheticFocusEvent<HTMLInputElement>) => void,
}

class Checkbox extends PureComponent<CheckboxProps> {
  static defaultProps = {
    checked: false,
    hasError: false,
    disabled: false,
  }

  onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const { onChange, disabled } = this.props;

    onChange && !disabled && onChange(checked, event);
  }

  render() {
    const { onChange, label, ...rest } = this.props;

    return (
      <CheckboxWrapperTag { ...rest } tagName="label">
        <CheckboxSquareTag modifiers={ rest } tagName="div">
          <CheckboxIconTag modifiers={ rest } tagName="div">
            <Icon name="Check" size="xs" />
          </CheckboxIconTag>
        </CheckboxSquareTag>
        <CheckboxTag
          modifiers={ rest }
          onChange={ this.onChange }
          type="checkbox"
          tagName="input"
        />
        <If condition={ !!label }>
          <CheckboxTextTag modifiers={ rest } tagName="div">{ label }</CheckboxTextTag>
        </If>
      </CheckboxWrapperTag>
    );
  }
}

export { Checkbox };
