import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M20 21c-1.29 0-2.58-.41-3.74-1.14-.16-.1-.37-.1-.53 0-2.31 1.47-5.16 1.47-7.47 0-.16-.1-.37-.1-.53 0C6.58 20.59 5.29 21 4 21H3c-.55 0-1 .45-1 1s.45 1 1 1h1c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h1c.55 0 1-.45 1-1s-.45-1-1-1h-1zM3.95 19H4c1.42 0 2.7-.7 3.66-1.64.19-.18.5-.18.69 0C9.3 18.3 10.58 19 12 19s2.7-.7 3.66-1.64c.19-.19.49-.19.69 0C17.3 18.3 18.58 19 20 19h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V2c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM7 6h10c.55 0 1 .45 1 1v2.97L12.62 8.2c-.41-.13-.84-.13-1.25 0L6 9.97V7c0-.55.45-1 1-1z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const DirectionsBoatIcon = (props: IconProps) =>
  renderIcon(props, iconType);
