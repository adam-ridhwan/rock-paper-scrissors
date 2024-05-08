import { Button } from '@/components/ui/button';
import ActionButton from '@/components/action-button';

export default function Home() {
  return (
    <main className='container flex min-h-dvh flex-col py-10'>
      <div className='flex flex-row items-center justify-between border border-muted-foreground p-4'>
        <div>
          <p className='text-2xl font-bold leading-5 text-primary'>ROCK</p>
          <p className='text-2xl font-bold leading-5 text-primary'>PAPER</p>
          <p className='text-2xl font-bold leading-5 text-primary'>SCISSORS</p>
        </div>

        <div className='flex size-20 flex-col items-center justify-center rounded-md bg-primary'>
          <p className='text-xs text-primary-foreground'>SCORE</p>
          <p className='text-4xl text-primary-foreground'>12</p>
        </div>
      </div>

      <div className='flex flex-1 flex-col items-center justify-center gap-8'>
        <div className='flex w-full flex-row justify-around pt-8'>
          <ActionButton type='paper' />
          <ActionButton type='scissors' />
        </div>
        <ActionButton type='rock' />
      </div>

      <div className='flex w-full justify-center'>
        <Button variant='outline' className='px-8 tracking-widest'>
          RULES
        </Button>
      </div>
    </main>
  );
}
