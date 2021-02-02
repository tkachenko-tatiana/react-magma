import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M17.6018 12.6269c-.025-2.5332 2.0656-3.7475 2.1587-3.8082-1.175-1.7193-3.005-1.9543-3.6569-1.9818-1.5575-.1575-3.0387.9168-3.8293.9168-.7882 0-2.0082-.8937-3.3-.87-1.6975.025-3.2632.987-4.137 2.5075-1.7637 3.0607-.4518 7.5944 1.2676 10.077.84 1.215 1.8419 2.5793 3.1569 2.5305 1.2662-.0506 1.7456-.8193 3.2762-.8193 1.5306 0 1.9613.8193 3.3019.7943 1.3625-.0256 2.2262-1.238 3.0606-2.4568.9644-1.4094 1.3619-2.7744 1.385-2.8444-.03-.0138-2.6575-1.02-2.6837-4.0456zm-2.5182-7.4332C15.7818 4.347 16.253 3.172 16.1243 2c-1.0057.0412-2.2244.67-2.9457 1.5144-.6475.7493-1.2137 1.9456-1.0618 3.0943 1.1225.0875 2.268-.5706 2.9668-1.415z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const AppleIcon = (props: IconProps) => renderIcon(props, iconType);
