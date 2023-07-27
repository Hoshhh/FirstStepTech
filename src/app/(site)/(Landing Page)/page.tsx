import { getCurrentSession } from '@/lib/session'
import Hero from './(components)/Hero'
import Info from './(components)/Info'
import Navbar from './(components)/Navbar'

export default async function Home() {
  const user = await getCurrentSession()
  console.log(user)
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
    </div>
  )
}
