import { Facebook, Linkedin, Slack, Twitter } from 'lucide-react';
import type { TShareConfig } from './types';

const SOCIAL_PROVIDERS = {
  linkedin: {
    name: 'LinkedIn',
    icon: <Linkedin className="size-4" />,
    shareUrl: (config: TShareConfig) =>
      'https://www.linkedin.com/sharing/share-offsite/?url='.concat(
        encodeURIComponent(config.url),
      ),
  },
  facebook: {
    name: 'Facebook',
    icon: <Facebook className="size-4" />,
    shareUrl: (config: TShareConfig) =>
      'https://www.facebook.com/sharer/sharer.php?u='.concat(
        encodeURIComponent(config.url),
      ),
  },
  slack: {
    name: 'Slack',
    icon: <Slack className="size-4" />,
    shareUrl: (config: TShareConfig) =>
      'https://slack.com/share?url='.concat(
        encodeURIComponent(config.title ?? 'Compartilhar no Slack'),
        '&url=',
        encodeURIComponent(config.url),
      ),
  },
  twitter: {
    name: 'Twitter',
    icon: <Twitter className="size-4" />,
    shareUrl: (config: TShareConfig) =>
      'https://x.com/intent/tweet?text='.concat(
        encodeURIComponent(config.title ?? 'Compartilhar no Twitter'),
        '&url=',
        encodeURIComponent(config.url),
      ),
  },
};

export { SOCIAL_PROVIDERS };
