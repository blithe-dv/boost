// @flow
import React from 'react';
import { Paper } from '../Paper';
import type { PropSizes } from '../../types';

type CardPlateProps = {|
  children: React$Node,
  padding?: PropSizes,
  paddingOuter?: PropSizes,
|};

const CardPlate = ({ children, paddingOuter, padding, ...rest }: CardPlateProps) => (
  <Paper { ...rest } padding={ paddingOuter }>
    {
      React.Children.map(children, child =>
        React.cloneElement(child, { padding: child.props.padding || padding }),
      )
    }
  </Paper>
);

CardPlate.defaultProps = {
  padding: 'md',
};

export { CardPlate };
