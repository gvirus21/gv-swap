import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from "../components/Main"

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-primary  text-white select-none flex flex-col`
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
    </div>
  )
}

export default Home
