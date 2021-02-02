import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M1.01 4.51c0-.71.73-1.2 1.39-.91l12.86 5.51c.41-.07.82-.11 1.24-.11 4.14 0 7.5 3.36 7.5 7.5 0 4.14-3.36 7.5-7.5 7.5-3.79 0-6.91-2.81-7.42-6.46L2.4 20.4c-.66.28-1.39-.2-1.39-.92L1 14.8c0-.47.33-.87.78-.97L10 12l-8.22-1.82c-.45-.1-.78-.51-.78-.98zM16.5 11c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm-2.12 3.38c.2-.2.51-.2.71 0l1.41 1.41 1.41-1.41c.2-.2.51-.2.71 0 .2.19.2.51 0 .71l-1.41 1.41 1.41 1.41c.2.2.2.51 0 .71-.2.2-.51.2-.71 0l-1.41-1.41-1.41 1.41c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l1.41-1.41-1.41-1.41c-.2-.2-.2-.51 0-.71z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const CancelScheduleSendIcon = (props: IconProps) =>
  renderIcon(props, iconType);
