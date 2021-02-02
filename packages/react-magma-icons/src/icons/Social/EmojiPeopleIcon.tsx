import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M5.09 2l.1115.0063c.4396.0499.7947.3914.8685.8437C6.48 5.2 8.53 6.99 10.99 7h2.54c1.3 0 1.97.72 2.36 1.11l3.76 3.77c.39.39.39 1.02 0 1.41l-.094.083a.9959.9959 0 01-1.316-.083L15 10.05V21c0 .55-.45 1-1 1l-.1162-.0068C13.388 21.9352 13 21.5107 13 21v-5h-2v5c0 .55-.45 1-1 1l-.1162-.0068C9.388 21.9352 9 21.5107 9 21V8.71C6.47 7.95 4.53 5.8 4.09 3.14 4 2.54 4.48 2 5.09 2zM12 2c1.1046 0 2 .8954 2 2s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const EmojiPeopleIcon = (props: IconProps) =>
  renderIcon(props, iconType);
