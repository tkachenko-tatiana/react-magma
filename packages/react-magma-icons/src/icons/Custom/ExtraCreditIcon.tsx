import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M16.8082 7.1076c2.3031 0 4.264 1.5531 5.039 3.4907h-2.4168c-.5929-.83-1.5446-1.3514-2.6222-1.3514-1.7976 0-3.2542 1.4382-3.2542 3.2352s1.4572 3.2462 3.2542 3.2462c1.2708 0 2.3691-.7017 2.9046-1.8086H22c-.6375 2.2145-2.7175 3.9559-5.1918 3.9559-2.981 0-5.3971-2.3973-5.3971-5.3782 0-2.981 2.4162-5.3898 5.3971-5.3898zM9.1966 7v1.9376h-5.259v2.4907h3.8752v1.9376H3.9376v2.4908h5.259v1.9376H2V7h7.1966z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const ExtraCreditIcon = (props: IconProps) =>
  renderIcon(props, iconType);
