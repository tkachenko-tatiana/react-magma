import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M9.23 10.88c.49.47 1.09.81 1.77.98l-2.77 7.6L6.61 21l-.25-2.22zm5.54 0l2.88 7.9-.26 2.22-1.62-1.54-2.77-7.6c.67-.17 1.28-.51 1.77-.98zM12 3l.1162.0068C12.612 3.0648 13 3.4893 13 4v1.18c1.34.48 2.24 1.86 1.94 3.42-.23 1.18-1.2 2.13-2.38 2.35C10.66 11.3 9 9.84 9 8c0-1.3.84-2.4 2-2.82V4c0-.55.45-1 1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const ArchitectureIcon = (props: IconProps) =>
  renderIcon(props, iconType);
