import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13c0 .55-.45 1-1 1s-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6zm5.02-2.22l-2.4 1.92c-.65.52-1.62.06-1.62-.78v-3.84c0-.84.97-1.3 1.62-.78l2.4 1.92c.5.4.5 1.16 0 1.56z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const NotStartedIcon = (props: IconProps) => renderIcon(props, iconType);
