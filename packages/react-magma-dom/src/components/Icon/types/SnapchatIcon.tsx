import * as React from 'react';
  import { IconProps, renderIcon } from '../utils';

  const iconType = {"viewBox":"0 0 28 28","paths":[{"d":"M23.32,18.59a.47.47,0,0,0-.41-.49A4.9,4.9,0,0,1,20.76,17a5.7,5.7,0,0,1-1.45-2,1.64,1.64,0,0,1-.13-.46.57.57,0,0,1,.35-.47,2.89,2.89,0,0,1,.79-.31,2.36,2.36,0,0,0,.78-.38.78.78,0,0,0,.35-.66.7.7,0,0,0-.33-.58,1.25,1.25,0,0,0-.7-.22,1.63,1.63,0,0,0-.59.14,1.61,1.61,0,0,1-.56.15.79.79,0,0,1-.22,0c.06-1.15.09-1.85.09-2.08a5,5,0,0,0-.31-2.07A5.13,5.13,0,0,0,17,5.86a5,5,0,0,0-2.77-.79,5,5,0,0,0-5,3,5,5,0,0,0-.31,2.07c0,.23,0,.93.09,2.08a.56.56,0,0,1-.26,0,1.83,1.83,0,0,1-.58-.14A1.75,1.75,0,0,0,7.56,12a1.26,1.26,0,0,0-.7.22.69.69,0,0,0-.32.59.77.77,0,0,0,.36.64,2.27,2.27,0,0,0,.78.38,2.89,2.89,0,0,1,.79.31.57.57,0,0,1,.35.47,1.64,1.64,0,0,1-.13.46,5.06,5.06,0,0,1-3.61,3,.47.47,0,0,0-.4.49c0,.56.83,1,2.5,1.24a4.75,4.75,0,0,1,.11.48,1.31,1.31,0,0,0,.21.55.5.5,0,0,0,.43.18A4.07,4.07,0,0,0,8.61,21a5,5,0,0,1,.72-.08,2.73,2.73,0,0,1,1.22.28,4.63,4.63,0,0,1,1,.59,4.32,4.32,0,0,0,1,.59,3.6,3.6,0,0,0,1.4.27,3.77,3.77,0,0,0,1.44-.27,4.22,4.22,0,0,0,1-.59,4.23,4.23,0,0,1,1-.59,2.76,2.76,0,0,1,1.22-.28,6.5,6.5,0,0,1,.72.07,5.1,5.1,0,0,0,.7.08.47.47,0,0,0,.42-.18,1.29,1.29,0,0,0,.2-.55c.05-.24.09-.4.11-.46,1.67-.26,2.5-.68,2.5-1.24ZM28,14a13.74,13.74,0,0,1-1.88,7A14,14,0,0,1,21,26.12,13.74,13.74,0,0,1,14,28a13.74,13.74,0,0,1-7-1.88A14,14,0,0,1,1.88,21,13.74,13.74,0,0,1,0,14,13.74,13.74,0,0,1,1.88,7,14,14,0,0,1,7,1.88,13.74,13.74,0,0,1,14,0a13.74,13.74,0,0,1,7,1.88A14,14,0,0,1,26.12,7,13.74,13.74,0,0,1,28,14Z","transform":"translate(0 0)"}]}
  
  export const SnapchatIcon: React.FunctionComponent<IconProps> = (props: IconProps) =>
    renderIcon(props, iconType);