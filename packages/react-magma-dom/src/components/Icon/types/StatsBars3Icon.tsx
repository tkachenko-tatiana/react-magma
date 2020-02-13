import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 40 40',
  paths: [
    {
      d:
        'M10,11.4285714 L1.42857143,11.4285714 C0.642857143,11.4285714 0,12.0714286 0,12.8571429 L0,38.5714286 C0,39.3571429 0.642857143,40 1.42857143,40 L10,40 C10.7857143,40 11.4285714,39.3571429 11.4285714,38.5714286 L11.4285714,12.8571429 C11.4285714,12.0714286 10.7857143,11.4285714 10,11.4285714 Z M24.2857143,5.71428571 L15.7142857,5.71428571 C14.9285714,5.71428571 14.2857143,6.35714286 14.2857143,7.14285714 L14.2857143,38.5714286 C14.2857143,39.3571429 14.9285714,40 15.7142857,40 L24.2857143,40 C25.0714286,40 25.7142857,39.3571429 25.7142857,38.5714286 L25.7142857,7.14285714 C25.7142857,6.35714286 25.0714286,5.71428571 24.2857143,5.71428571 Z M38.5714286,0 L30,0 C29.2142857,0 28.5714286,0.642857143 28.5714286,1.42857143 L28.5714286,38.5714286 C28.5714286,39.3571429 29.2142857,40 30,40 L38.5714286,40 C39.3571429,40 40,39.3571429 40,38.5714286 L40,1.42857143 C40,0.642857143 39.3571429,0 38.5714286,0 Z'
    }
  ]
};

export const StatsBars3Icon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
