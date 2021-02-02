import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M11.75 7.03c.47-.06.88.04 1.25.25h.01l.02.01c.23.11.44.26.61.45l1.29 1.43c.8.88 1.98 1.55 3.23 1.76.48.08.84.48.84.97 0 .63-.58 1.1-1.2.97-1.4-.28-2.8-.99-3.8-1.82v3.45h3c1.1 0 2 .9 2 2V21c0 .55-.45 1-1 1s-1-.45-1-1v-4h-5c-1.1 0-2-.9-2-2V9.1c0-1.03.73-1.95 1.75-2.07zM9 12.1v2.07c-1.16.42-2 1.52-2 2.83 0 1.66 1.34 3 3 3 1.31 0 2.42-.84 2.83-2h2.07c-.46 2.28-2.48 4-4.9 4-2.76 0-5-2.24-5-5 0-2.42 1.72-4.44 4-4.9zM12 2c1.1046 0 2 .8954 2 2s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const AccessibleIcon = (props: IconProps) => renderIcon(props, iconType);
