import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => (
  <div className='container mx-auto'>
    <div className='w-min mx-auto px-4 mt-6 mb-6 '>
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm normal-case'
          }
        }}
        signInUrl='/sign-in'
        path='/sign-up'
        // routing='path'
        // signInUrl='sign-in'
      />
    </div>
  </div>
)

export default SignUpPage
