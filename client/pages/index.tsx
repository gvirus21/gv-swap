import type { NextPage } from 'next'
import Header  from '../components/Header'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-gradient-to-b from-bg-blue-light to-bg-blue-dark  text-white select-none flex flex-col justify-between`
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
    </div>
  )
}

export default Home
