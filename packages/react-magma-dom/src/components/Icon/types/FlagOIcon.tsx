import * as React from 'react';
  import { IconProps, renderIcon } from '../utils';

  const iconType = {"viewBox":"0 0 27 24","paths":[{"d":"M25.5,16.33V6.7a10.23,10.23,0,0,1-4.78,1.42,4.86,4.86,0,0,1-2.27-.5,23.24,23.24,0,0,0-2.87-1.19A8.79,8.79,0,0,0,12.8,6,13.48,13.48,0,0,0,6.5,8v9.36a16.62,16.62,0,0,1,6.77-1.76,11.64,11.64,0,0,1,1.61.11,7.89,7.89,0,0,1,1.53.41c.52.19.92.35,1.21.48l1.29.62.43.22a3.5,3.5,0,0,0,1.58.34,10.31,10.31,0,0,0,4.58-1.43ZM4.5,4a1.92,1.92,0,0,1-.27,1,2.1,2.1,0,0,1-.73.72V25.5A.48.48,0,0,1,3,26H2a.49.49,0,0,1-.36-.14.51.51,0,0,1-.14-.36V5.72A2.18,2.18,0,0,1,.77,5a2,2,0,0,1,.32-2.41A1.93,1.93,0,0,1,2.5,2a1.93,1.93,0,0,1,1.41.59A1.93,1.93,0,0,1,4.5,4Zm23,1V16.92a.93.93,0,0,1-.55.89l-.26.14a12.91,12.91,0,0,1-5.77,1.82,5.5,5.5,0,0,1-2.47-.55L18,19c-.66-.34-1.18-.59-1.54-.75A9.82,9.82,0,0,0,15,17.8a7.06,7.06,0,0,0-1.78-.22,11.94,11.94,0,0,0-3.68.69A17.51,17.51,0,0,0,6,19.86.89.89,0,0,1,5.5,20a1.11,1.11,0,0,1-.5-.12A1,1,0,0,1,4.5,19V7.41A1,1,0,0,1,5,6.55q.55-.33,1.23-.66c.45-.23,1-.5,1.78-.82a14.75,14.75,0,0,1,2.38-.77A10.67,10.67,0,0,1,12.79,4a10.47,10.47,0,0,1,3.27.49,24.36,24.36,0,0,1,3.27,1.34,3,3,0,0,0,1.39.3,10.24,10.24,0,0,0,4.84-1.75l.49-.27A1,1,0,0,1,27.5,5Z","transform":"translate(-0.5 -2)"}]}
  
  export const FlagOIcon: React.FunctionComponent<IconProps> = (props: IconProps) =>
    renderIcon(props, iconType);