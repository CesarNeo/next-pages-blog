/* eslint-disable no-console */

import { useCallback, useMemo } from 'react';
import { CopyCheck, Link } from 'lucide-react';
import { SOCIAL_PROVIDERS } from './social-providers';
import type { TSocialProvider, TUseShareProps } from './types';
import { useClipboard } from '../use-clipboard';

function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: TUseShareProps) {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout });

  const shareConfig = useMemo(
    () => ({
      url,
      title,
      text,
    }),
    [url, title, text],
  );

  const share = useCallback(
    async (provider: TSocialProvider) => {
      try {
        if (provider === 'clipboard') {
          return await handleCopy(url);
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];

        if (!providerConfig) {
          throw new Error(`Provider ${provider} is not supported.`);
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(
          shareUrl,
          '_blank',
          'noopener,noreferrer,width=600,height=400,location=yes,status=yes',
        );

        return Boolean(shareWindow);
      } catch (error) {
        console.error('Error sharing:', error);
        return false;
      }
    },
    [handleCopy, shareConfig, url],
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key as TSocialProvider,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as TSocialProvider),
      })),
      {
        provider: 'clipboard',
        name: isCopied ? 'Link copiado' : 'Copiar link',
        icon: isCopied ? (
          <CopyCheck className="size-4" />
        ) : (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link className="size-4" />
        ),
        action: () => share('clipboard'),
      },
    ],
    [isCopied, share],
  );

  return { shareButtons };
}

export { useShare };
