import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, SignIn } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import SignInPage from './sign-in'

const publicPages: Array<string> = ['/']

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname)

  return (
    <ClerkProvider {...pageProps}>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <SignInPage></SignInPage>
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  )
}
