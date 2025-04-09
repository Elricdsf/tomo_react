import 'styled-components';
import { MotionValue } from 'framer-motion';

declare module 'styled-components' {
  export interface CSSProperties {
    backgroundPositionY?: string | number | MotionValue<string | number>;
    [key: string]: any;
  }
}