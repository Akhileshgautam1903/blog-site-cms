import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex justify-center items-center h-96">
      <Link href={"/blogs"} className="px-4 py-2 border-2 rounded-md border-blue-500 bg-white hover:bg-blue-500 hover:text-white">Go to blogs page</Link>
    </main>
  )
}
