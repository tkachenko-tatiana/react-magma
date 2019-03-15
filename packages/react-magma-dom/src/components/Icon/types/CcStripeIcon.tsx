import * as React from 'react';
  import { IconProps, renderIcon } from '../utils';

  const iconType = {"viewBox":"0 0 36 24","paths":[{"d":"M25,14.11a3.41,3.41,0,0,1-.33,1.66.88.88,0,0,1-.81.54,1.47,1.47,0,0,1-.64-.14v-3.5a1.29,1.29,0,0,1,.89-.47c.6,0,.89.64.89,1.91Zm6.85-.56H30.08Q30.17,12,31,12C31.48,12,31.77,12.53,31.8,13.55ZM7.44,15.66a1.87,1.87,0,0,0-.52-1.43,4.35,4.35,0,0,0-1.58-.9A3.9,3.9,0,0,1,4.53,13a.48.48,0,0,1-.25-.39c0-.27.2-.4.6-.4a4.35,4.35,0,0,1,1.93.51l.28-1.75a5.33,5.33,0,0,0-2.32-.5,2.91,2.91,0,0,0-1.93.6,2.06,2.06,0,0,0-.75,1.7,1.91,1.91,0,0,0,.51,1.41A4.19,4.19,0,0,0,4.16,15a3.46,3.46,0,0,1,.85.39.54.54,0,0,1,.24.43c0,.33-.25.49-.75.49a3.84,3.84,0,0,1-1.09-.2,5.65,5.65,0,0,1-1.13-.47L2,17.42a5.2,5.2,0,0,0,2.63.64,3.24,3.24,0,0,0,2-.57,2.23,2.23,0,0,0,.8-1.83Zm4.61-3.36.29-1.74h-1.5V8.45l-2,.33-.28,1.78-.72.13L7.56,12.3h1v3.42a2.28,2.28,0,0,0,.69,1.87,2.68,2.68,0,0,0,1.73.47,5.27,5.27,0,0,0,1.24-.17V16.05a4.44,4.44,0,0,1-.69.11c-.44,0-.66-.26-.66-.79V12.3Zm4.93.39V10.52a1.67,1.67,0,0,0-.43,0,1.46,1.46,0,0,0-.87.25,1.33,1.33,0,0,0-.52.72L15,10.56H13v7.36H15.3V13.14a1.57,1.57,0,0,1,1.28-.48A2.17,2.17,0,0,1,17,12.69Zm.58,5.23h2.35V10.56H17.56ZM27.28,14a4.52,4.52,0,0,0-.7-2.8,2.08,2.08,0,0,0-1.74-.81A2.45,2.45,0,0,0,23,11.3l-.13-.74H20.83V20.64l2.34-.39V17.89a3.49,3.49,0,0,0,1.06.17,2.71,2.71,0,0,0,2.1-.87,4.52,4.52,0,0,0,1-3.16ZM20,8.59a1.24,1.24,0,0,0-2.47,0,1.23,1.23,0,0,0,.36.89,1.24,1.24,0,0,0,1.75,0A1.23,1.23,0,0,0,20,8.59Zm14,5.58a4.45,4.45,0,0,0-.75-2.75,2.7,2.7,0,0,0-2.25-1,3,3,0,0,0-2.37,1,4.24,4.24,0,0,0-.86,2.82,3.85,3.85,0,0,0,1,2.93,3.38,3.38,0,0,0,2.52.86,4.47,4.47,0,0,0,2.5-.62l-.25-1.61a4.16,4.16,0,0,1-2,.48,1.4,1.4,0,0,1-1-.3,1.5,1.5,0,0,1-.44-1H34A7,7,0,0,0,34,14.17ZM36,4V24a2,2,0,0,1-2,2H2a2,2,0,0,1-1.41-.59A2,2,0,0,1,0,24V4A2,2,0,0,1,.59,2.59,2,2,0,0,1,2,2H34a2,2,0,0,1,2,2Z","transform":"translate(0 -2)"}]}
  
  export const CcStripeIcon: React.FunctionComponent<IconProps> = (props: IconProps) =>
    renderIcon(props, iconType);