import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M9 13c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zm11.5 6c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5zm-4 0c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5zM9 15H5v4h4v-4zm5.5 2c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5zm4 0c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5zm-2-2c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5zm4 0c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5zm-6-2c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5zm4 0c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5zM9 3c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm10 0c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zM9 5H5v4h4V5zm10 0h-4v4h4V5z',
      fillRule: 'evenodd',
      fill: '#000',
    },
  ],
  circles: [],
};

export const QrCodeIcon = (props: IconProps) => renderIcon(props, iconType);
