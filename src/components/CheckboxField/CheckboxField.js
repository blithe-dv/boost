// @flow

import React from 'react';

import type { InputType, MetaType } from '../../types';
import * as formUtils from '../../utils/forms';
import { Checkbox } from '../Checkbox';
import { FormField } from '../Form/FormField';

type CheckboxFieldProps = {
  /** field label */
  label?: string,
  /** form input object */
  input: InputType,
  /** form meta object */
  meta?: MetaType,
  /** color of the check */
  color ?: 'primary' | 'secondary',
  /** show disabled styles  */
  disabled ?: boolean,
  /** no wrap text  */
  nowrap?: boolean,
  /** when true then stretch to the maximal width */
  stretch?: boolean,
};

const CheckboxField = ({
  label,
  stretch,
  input,
  meta,
  disabled,
  color,
  nowrap,
  ...rest
}: CheckboxFieldProps) => {
  const { name, value, onChange, onFocus, onBlur } = input;
  const hasError = formUtils.hasError(meta);

  return (
    <FormField { ...rest } input={ input } meta={ meta } stretch={ stretch }>
      <Checkbox
        label={ label }
        name={ name }
        onChange={ onChange }
        onBlur={ onBlur }
        onFocus={ onFocus }
        checked={ value }
        hasError={ hasError }
        disabled={ disabled }
        color={ color }
        nowrap={ nowrap }
        indeterminate={ value === null }
      />
    </FormField>
  );
};

export { CheckboxField };
