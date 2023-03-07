import { useAuth } from '@clerk/nextjs'

const Blogs = () => {
  const { getToken, sessionId } = useAuth()

  const res = fetch('/api/articles').then(async (res) => {
    console.log('token', await getToken())
    console.log('sessionId', sessionId)
    console.log(res)
  })
  console.log(res)
  return <>sessionId:{sessionId}</>
}
export default Blogs
