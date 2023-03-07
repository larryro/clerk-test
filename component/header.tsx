import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

// export default function Header() {
//   return (
//     // <div>
//     <header className='align-right'>
//       {/* <h1>My App</h1> */}
//       <SignedIn>
//         {/* Mount the UserButton component */}
//         <UserButton />
//       </SignedIn>
//       <SignedOut>
//         {/* Signed out users get sign in button */}
//         <SignInButton />
//       </SignedOut>
//     </header>
//     // </div>
//   )
// }

// function MyApp({ pageProps }) {
//   return (
//     <ClerkProvider {...pageProps}>
//       <Header />
//     </ClerkProvider>
//   )
// }

// export default MyApp
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-white px-4 sm:px-6 lg:px-8 mt-8'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt=''
            />
          </a>
        </div>
        <div className='flex flex-1 items-center justify-end gap-x-6'>
          {/* logged in */}
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            {/* <SignInButton /> */}
            <Link
              href='/sign-in'
              className='hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900'
            >
              Log in
            </Link>
          </SignedOut>
          {/* <a
            href='#'
            className='hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900'
          >
            Log in
          </a>
          <a
            href='#'
            className='rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Sign up
          </a> */}
        </div>
        {/* <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div> */}
      </nav>
    </header>
  )
}
