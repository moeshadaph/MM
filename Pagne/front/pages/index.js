import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainPage from "@/pages/Main";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
        <MainPage/>
   </>
  )
}
