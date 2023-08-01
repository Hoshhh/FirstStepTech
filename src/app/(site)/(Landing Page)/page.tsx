import { getCurrentUser } from '@/lib/session'
import Hero from './(components)/Hero'
import Info from './(components)/Info'
import Navbar from './(components)/Navbar'

export default async function Home() {
  const user = await getCurrentUser()
  console.log(user)
  return (
    <div>
      <Navbar user={user} />
      <Hero />
      <Info />
    </div>
  )
}
