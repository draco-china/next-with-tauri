import Link from 'next/link';
import { VercelLogoIcon } from '@radix-ui/react-icons';
import SwitchLanguage from './switch-language';

export function LayoutHeader({ lng }: { lng: string }) {
  return (
    <header className='sticky top-0 z-40 h-auto w-full border-b pt-[calc(env(safe-area-inset-top))] backdrop-blur-md'>
      <div className='container flex h-16 items-center justify-between'>
        <div className='flex gap-6'>
          <Link href={`/${lng}`} className='flex items-center space-x-2'>
            <VercelLogoIcon className='size-6' />
            <span className='inline-block font-bold'>Next Template</span>
          </Link>
        </div>

        <div className='flex flex-1 items-center justify-end gap-4'>
          <nav className='flex items-center gap-1'>
            <SwitchLanguage />
          </nav>
        </div>
      </div>
    </header>
  );
}
