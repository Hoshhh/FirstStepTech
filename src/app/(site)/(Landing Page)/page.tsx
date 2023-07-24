import Hero from './(components)/Hero'
import Info from './(components)/Info'
import Navbar from './(components)/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
    </div>
  )
}
