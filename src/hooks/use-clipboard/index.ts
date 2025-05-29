/* eslint-disable no-console */
import { useCallback, useEffect, useState } from 'react';
import type { TUseClipboardProps } from './types';

function useClipboard({ timeout = 2000 }: TUseClipboardProps) {
  const [isCopiedState, setIsCopiedState] = useState(false);

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator.clipboard) {
      console.warn('Clipboard API not supported in this browser.');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopiedState(true);
      return true;
    } catch (error) {
      console.error('Failed to copy text:', error);
      setIsCopiedState(false);
      return false;
    }
  }, []);

  useEffect(() => {
    if (isCopiedState) {
      const timer = setTimeout(() => {
        setIsCopiedState(false);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [isCopiedState, timeout]);

  return {
    isCopied: isCopiedState,
    handleCopy,
  };
}

export { useClipboard };
