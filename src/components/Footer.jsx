import { IconGitHub, IconInstagram, IconLinkedIn, IconTwitter } from '../icons'

const urlList = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/gustavo_dev_',
    icon: <IconTwitter className='h-7 w-7 text-blue-600 dark:text-blue-400' />
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/gustavo.dev__/',
    icon: <IconInstagram className='h-7 w-7 text-red-600 dark:text-red-400' />
  },
  {
    name: 'GitHub',
    href: 'https://github.com/elmergustavo',
    icon: <IconGitHub className='h-7 w-7 dark:invert' />
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/elmer-gustavo-p%C3%BA-769b60201/',
    icon: <IconLinkedIn className='h-7 w-7 text-blue-600 dark:text-blue-400' />
  }
]

export const Footer = () => {
  return (
    <footer className='w-full select-none bg-gray-200 p-3 text-center transition-colors duration-500 dark:bg-gray-800'>
      <div className='flex items-center justify-center gap-5 p-1'>
        {urlList.map((url) => (
          <a
            key={url.name}
            href={url.href}
            target='_blank'
            rel='noreferrer'
            className='transition-transform hover:scale-150'
          >
            {url.icon}
          </a>
        ))}
      </div>
      <p className='text-sm transition-colors duration-500 dark:text-gray-300 '>
        Made by{' '}
        <a
          href='https://github.com/elmergustavo'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 decoration-double underline-offset-2 transition-colors duration-500 hover:underline dark:text-blue-400'
        >
          Gustavo Pú
        </a>
      </p>
    </footer>
  )
}
