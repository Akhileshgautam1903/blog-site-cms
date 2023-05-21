
export const getStaticPaths = async() =>{

    const res = await fetch(process.env.BLOGS_URL);
    const data = await res.json();

    const paths = data.map(blog => {
        return {
            params: { id: blog.id.toString() }
        }
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
    
    return(
        <div className="my-8">
            <h1 className="text-6xl font-bold dark:text-white">{ blog.title }</h1>
            <p className="text-zinc-500  my-3">Author - { blog.author }</p>
            <img className="my-2 rounded-sm" alt="blog-img" src={ blog.image } width={720} height={800} />
            <div className="my-3 dark:text-zinc-300" dangerouslySetInnerHTML={{__html: blog.content}}></div>
        </div>
    )
}