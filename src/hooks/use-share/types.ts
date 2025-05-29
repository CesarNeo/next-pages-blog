import type { SOCIAL_PROVIDERS } from './social-providers';

type TShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

type TUseShareProps = TShareConfig & {
  clipboardTimeout?: number;
};

type TSocialProvider = keyof typeof SOCIAL_PROVIDERS | 'clipboard';

export type { TShareConfig, TUseShareProps, TSocialProvider };
