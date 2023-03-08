import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Create() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { getToken, sessionId } = useAuth()

  return (
    <div className='container mt-20'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <form className='space-y-8 divide-y divide-gray-200'>
          <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
            <div className='space-y-6 sm:space-y-5'>
              <div>
                <h3 className='text-base font-semibold leading-6 text-gray-900'>Article</h3>
                <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>

              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='username'
                    className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
                  >
                    Title
                  </label>
                  <div className='mt-2 sm:col-span-2 sm:mt-0'>
                    <div className='flex max-w-lg rounded-md shadow-sm'>
                      <input
                        type='text'
                        name='username'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id='username'
                        autoComplete='username'
                        className='block px-2 w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>

                <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='about'
                    className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
                  >
                    Content
                  </label>
                  <div className='mt-2 sm:col-span-2 sm:mt-0'>
                    <textarea
                      id='about'
                      name='about'
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={3}
                      className='block px-2 w-full max-w-lg rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6'
                      defaultValue={''}
                    />
                    {/* <p className='mt-2 text-sm text-gray-500'>
                      Write a few sentences about yourself.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <div className='flex justify-end gap-x-3'>
              <button
                onClick={() => {
                  router.push('/')
                }}
                type='button'
                className='rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              >
                Cancel
              </button>
              <button
                type='submit'
                onClick={async (e) => {
                  e.preventDefault()
                  if (content == '' || title == '') alert('Please fill in all fields')
                  const res = await axios.post('/api/articles?_clerk_session_id=' + sessionId, {
                    title,
                    content
                  })
                  if (res.status === 201) {
                    router.push('/')
                  }
                }}
                className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
