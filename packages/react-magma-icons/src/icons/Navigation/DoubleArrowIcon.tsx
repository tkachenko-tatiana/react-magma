import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M14.56 5l.1598.0071c.5285.0472 1.0111.3265 1.3202.7629l4.04 5.65c.25.35.25.81.01 1.16l-4.04 5.65c-.34.48-.9.77-1.49.77l-.1469-.0055c-1.3992-.106-2.1841-1.7148-1.3431-2.8845L16 12l-2.93-4.11c-.86-1.21 0-2.89 1.49-2.89zm-7 0l.1598.0071c.5285.0472 1.012.3265 1.3302.7629l4.03 5.65c.25.35.25.81.01 1.16l-4.04 5.65c-.34.48-.9.77-1.49.77l-.1469-.0055C6.014 18.8885 5.229 17.2797 6.07 16.11L9 12 6.07 7.89C5.2 6.68 6.07 5 7.56 5z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const DoubleArrowIcon = (props: IconProps) =>
  renderIcon(props, iconType);
