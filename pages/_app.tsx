import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'
import { useRouter } from 'next/router'
// import SignInPage from './sign-in'
// import SignUpPage from './sign-up'

// const publicPages: Array<string> = ['/', '/sign-in*', '/sign-up*']

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  console.log('pathname', pathname)
  // Check if the current route matches a public page
  // const isPublicPage = publicPages.includes(pathname)

  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
    // <ClerkProvider {...pageProps}>
    //   {isPublicPage ? (
    //     <Component {...pageProps} />
    //   ) : (
    //     <>
    //       <SignedIn>
    //         <Component {...pageProps} />
    //       </SignedIn>
    //       <SignedOut>
    //         {/* {pathname.includes('sign-in') ? <SignInPage></SignInPage> : ''} */}
    //         {pathname.includes('sign-up') ? <SignUpPage></SignUpPage> : <SignInPage></SignInPage>}
    //       </SignedOut>
    //     </>
    //   )}
    // </ClerkProvider>
  )
}
