import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M12.53 9c.59 0 1.15.26 1.53.73l1.34 1.6c1.26 1.5 2.87 2.42 4.75 2.63.49.05.85.48.85.98l-.007.118c-.064.541-.563.938-1.123.882-2.3-.28-4.31-1.39-5.87-3.19V15l3.87 1.55c.81.32 1.29 1.19 1.08 2.08-.2.83-1 1.37-1.85 1.37H10v-.5c0-.83.67-1.5 1.5-1.5h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3C10.12 17 9 18.12 9 19.5v.5H6.79c-1.05 0-1.88-.9-1.78-1.97.07-.7.58-1.27 1.23-1.53L10 15v-2.25c-1.55 1.8-3.57 2.92-5.87 3.19-.6.07-1.13-.4-1.13-1l.0063-.114c.05-.45.3922-.8206.8537-.876 1.88-.21 3.5-1.13 4.75-2.63l1.34-1.6c.38-.46.94-.72 1.53-.72zM12 4c1.1046 0 2 .8954 2 2s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const SelfImprovementIcon = (props: IconProps) =>
  renderIcon(props, iconType);
