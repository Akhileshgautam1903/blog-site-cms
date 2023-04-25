import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();
  useEffect(() => {
    router.push("/blogs");
  },[])
  
  // return (
  //   <main className="flex justify-center items-center h-96">
  //     <Link href={"/blogs"} className="px-4 py-2 border-2 rounded-md dark:text-white border-blue-500 hover:bg-blue-500 hover:text-white">Go to blogs page</Link>
  //   </main>
  // )
}
