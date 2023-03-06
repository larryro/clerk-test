import { SignIn } from '@clerk/nextjs'

const SignInPage = () => (
  <div className='container mx-auto'>
    <div className='w-min mx-auto px-4 mt-6 mb-6 '>
      <SignIn
        path='/sign-in'
        // routing='path'
        // signUpUrl='sign-up'
        appearance={{
          elements: {
            formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm normal-case'
          }
        }}
        signUpUrl='/sign-up'
      />
    </div>
  </div>
)

export default SignInPage
