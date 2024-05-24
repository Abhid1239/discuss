import AppBar from "@/components/discuss/AppBar";
import BlogPost, { BlogPostStatic } from "@/components/discuss/BlogPost";
import { useBlog } from "@/hooks";
import { useParams } from "react-router-dom";
// type Props = {}

function Blog() {
    const { id } = useParams();
    const { post } = useBlog({ id: id || "" });
    console.log(post)
    return (
        <>
            <AppBar />
            <header key={post?.id} className="bg-gray-100 py-6 px-4 md:px-6 dark:bg-gray-800">
                <div className="container mx-auto max-w-3xl">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            {post?.title}
                        </h1>
                        <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                            <div>
                                <span className="font-medium">{post.author.name || "Anonymous"}</span>
                                <span> - </span>
                                <time dateTime="2023-05-20">May 20, 2023</time>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mx-auto my-12 grid grid-cols-1 gap-12 px-4 md:px-6">
                <article className="prose prose-gray max-w-none dark:prose-invert">
                    <p>
                        {post.content}
                    </p>
                </article>
            </div>
            {/* <BlogFooter /> */}
        </>
    )
}

export default Blog