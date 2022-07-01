import { SerializedStyles } from '@emotion/react';
declare const FONT_BASE: number;
interface pageType {
  label: string;
  iconCode: string;
  path: string;
  component: NodeRequire;
  isDefault: boolean;
}

declare module 'react' {
  interface Attributes {
    css?: SerializedStyles;
  }
}
