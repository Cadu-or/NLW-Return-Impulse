import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export function Widget() {
  return (
		<Popover className='absolute bottom-4 right-4'>
      <Popover.Panel>Hello World</Popover.Panel>
			<Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
				<h1><ChatTeardropDots className='w-6 h-6'/></h1>

				<span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out'>
					<span className='pl-2'>
						Feedback
					</span>
				</span>
			</Popover.Button>
		</Popover>
	)
}