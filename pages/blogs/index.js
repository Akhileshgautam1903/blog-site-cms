import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {

    const res = await fetch(process.env.BLOGS_URL);
    const data = await res.json();

    return{
        props: { blogs: data }
    }
}

export default function Blogs({ blogs }) {

    return(
        <div>
            {blogs.map(blog => (
                <Link href={`/blogs/${ blog.id }`} key={ blog.id } >
                    <div className="px-6 py-5 shadow-md my-2 rounded-sm border-s-8 border-s-white dark:border-s-slate-900 dark:hover:border-s-blue-500 hover:border-s-blue-500">
                        <div className="md:flex">
                            <Image className="rounded-md md:mx-3 my-2 mx-0 md:h-28 md:w-40 w-full" src={ blog.image } height={800} width={800}/>
                            <div className="">
                                <h3 className="text-xl font-medium text-zinc-700 dark:text-slate-400">{ blog.title }</h3>
                                <p className="text-sm text-gray-500 mt-4">{ blog.author }</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}