import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M5.28 20.64V14.4H4.8c-.528 0-.96-.432-.96-.96V9.12c0-1.056.864-1.92 1.92-1.92h2.88c1.056 0 1.92.864 1.92 1.92v4.32c0 .528-.432.96-.96.96h-.48v6.24c0 .528-.432.96-.96.96H6.24c-.528 0-.96-.432-.96-.96zm12 0v-4.8h1.5456c.6528 0 1.1136-.6432.912-1.2672l-2.016-6.0576C17.4528 7.728 16.7232 7.2 15.8976 7.2h-.1152c-.8256 0-1.5648.528-1.824 1.3152l-2.016 6.0576c-.2112.624.2496 1.2672.912 1.2672H14.4v4.8c0 .528.432.96.96.96h.96c.528 0 .96-.432.96-.96zM7.2 6.24c1.0656 0 1.92-.8544 1.92-1.92 0-1.0656-.8544-1.92-1.92-1.92-1.0656 0-1.92.8544-1.92 1.92 0 1.0656.8544 1.92 1.92 1.92zm8.64 0c1.0656 0 1.92-.8544 1.92-1.92 0-1.0656-.8544-1.92-1.92-1.92-1.0656 0-1.92.8544-1.92 1.92 0 1.0656.8544 1.92 1.92 1.92z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const WcIcon = (props: IconProps) => renderIcon(props, iconType);
