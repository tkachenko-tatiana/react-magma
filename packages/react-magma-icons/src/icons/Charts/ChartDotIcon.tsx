import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M12 17.4444c1.2248 0 2.2222.9974 2.2222 2.2223 0 1.2248-.9974 2.2222-2.2222 2.2222s-2.2222-.9974-2.2222-2.2222c0-1.2249.9974-2.2223 2.2222-2.2223zm-7.7778 0c1.2249 0 2.2222.9974 2.2222 2.2223 0 1.2248-.9973 2.2222-2.2222 2.2222C2.9974 21.8889 2 20.8915 2 19.6667c0-1.2249.9974-2.2223 2.2222-2.2223zm15.5556 0c1.2248 0 2.2222.9974 2.2222 2.2223 0 1.2248-.9974 2.2222-2.2222 2.2222-1.2249 0-2.2222-.9974-2.2222-2.2222 0-1.2249.9973-2.2223 2.2222-2.2223zM12 10.2222c1.2248 0 2.2222.9974 2.2222 2.2222 0 1.2249-.9974 2.2223-2.2222 2.2223s-2.2222-.9974-2.2222-2.2223c0-1.2248.9974-2.2222 2.2222-2.2222zm7.7778 0c1.2248 0 2.2222.9974 2.2222 2.2222 0 1.2249-.9974 2.2223-2.2222 2.2223-1.2249 0-2.2222-.9974-2.2222-2.2223 0-1.2248.9973-2.2222 2.2222-2.2222zM12 3c1.2248 0 2.2222.9974 2.2222 2.2222 0 1.2249-.9974 2.2222-2.2222 2.2222s-2.2222-.9973-2.2222-2.2222C9.7778 3.9974 10.7752 3 12 3z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const ChartDotIcon = (props: IconProps) => renderIcon(props, iconType);
