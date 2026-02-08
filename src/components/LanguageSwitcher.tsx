'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button, Flex } from '@once-ui-system/core';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove the current locale from the pathname if it exists
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

    // Navigate to the new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  return (
    <Flex gap="8" vertical="center">
      <Button
        variant={locale === 'en' ? 'primary' : 'secondary'}
        size="s"
        onClick={() => switchLocale('en')}
      >
        EN
      </Button>
      <Button
        variant={locale === 'es' ? 'primary' : 'secondary'}
        size="s"
        onClick={() => switchLocale('es')}
      >
        ES
      </Button>
    </Flex>
  );
}
