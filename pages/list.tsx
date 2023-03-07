import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { Arima } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'content content content',
    role: 'Member'
  }
]

export default function ContentList() {
  const router = useRouter()
  const { getToken, sessionId } = useAuth()
  const [articles, setArticles]: [any, any] = useState([])
  console.log('sessionid', sessionId)
  useEffect(() => {
    // if (sessionId) {
    axios.get('/api/articles?depth=2&_clerk_session_id=' + sessionId).then(async (res) => {
      // console.log('token', await getToken())
      console.log('sessionId', sessionId)
      console.log(res.data.docs)
      setArticles(res.data.docs)
    })
    // }
  }, [sessionId])
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-base font-semibold leading-6 text-gray-900'>Articles</h1>
          <p className='mt-2 text-sm text-gray-700'>
            All users can see the list of articles. Only authenticated users can create the article.
          </p>
        </div>
        <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
          {/* <Link href={'/create'}> */}
          <button
            type='button'
            onClick={(e) => {
              console.log('create')
              e.preventDefault()
              router.push('/create')
            }}
            className='block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Create
          </button>
          {/* </Link> */}
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-gray-300'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
                  >
                    Title
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'
                  >
                    Content
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'
                  >
                    Author
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'
                  >
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {articles.map((article: any) => (
                  <tr key={article.id}>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>
                      {article.title}
                    </td>
                    <td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
                      {article.content}
                    </td>
                    <td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
                      {article.author.email}
                    </td>
                    <td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
                      {article.createdAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
