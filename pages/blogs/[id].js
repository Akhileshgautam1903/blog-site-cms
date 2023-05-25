import { useRouter } from 'next/router'

export const getStaticPaths = async() =>{

    const res = await fetch(process.env.BLOGS_URL);
    const data = await res.json();

    const paths = data.map(blog => {
        return {
            params: { id: blog.postId }
        }
        // return {
        //     params: { id: blog.id.toString() }
        // }
    });

    return{
        paths,
        fallback: false
    }

}

export const getStaticProps = async(context) =>{

    const id = context.params.id;
    const res = await fetch(`${process.env.BLOGS_URL}/` + id);
    const data = await res.json();

    return {
        props: { blog: data },
        revalidate: 10,
    };
}


export default function Details ({ blog }) {

    const router = useRouter();

    return(
        <div style={{backgroundColor: `${blog.backgroundColor}`}}>
            <div className="w-2/5 mx-auto py-6">
                <h1 className="text-6xl font-bold dark:text-white" style={{color: `${blog.titleColor}`}}>{ blog.title }</h1>
                <p className="text-zinc-500  my-3">Author - { blog.author }</p>
                <img className="my-2 rounded-sm" alt="blog-img" src={ blog.image } width={720} height={800} />
                <div className="my-3 dark:text-zinc-300" dangerouslySetInnerHTML={{__html: blog.content}}></div>
                <button className="rounded-md p-2 my-4" style={{backgroundColor: `${blog.titleColor}`, color: `${blog.backgroundColor}`}} onClick={() => router.push('/blogs')}>Go back to home</button>
            </div>
        </div>
    )
}