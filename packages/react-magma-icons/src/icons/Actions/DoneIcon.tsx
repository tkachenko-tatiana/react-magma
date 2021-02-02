import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M9 16.2l-3.5-3.5a.9839.9839 0 00-1.4 0c-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4a.9839.9839 0 00-1.4 0L9 16.2z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const DoneIcon = (props: IconProps) => renderIcon(props, iconType);
