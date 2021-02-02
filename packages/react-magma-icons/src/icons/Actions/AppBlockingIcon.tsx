import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm1 7c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm2.21 2.85l-3.36 3.36c.35.18.73.29 1.15.29 1.38 0 2.5-1.12 2.5-2.5 0-.42-.11-.8-.29-1.15zM18 9.5c-1.38 0-2.5 1.12-2.5 2.5 0 .42.11.8.29 1.15l3.36-3.36c-.35-.18-.73-.29-1.15-.29z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const AppBlockingIcon = (props: IconProps) =>
  renderIcon(props, iconType);
