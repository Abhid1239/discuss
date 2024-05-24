import AppBar from "@/components/discuss/AppBar";
import BlogPost, { BlogPostStatic } from "@/components/discuss/BlogPost";
import { useBlogs } from "@/hooks";

// type Props = {}

function Blogs() {
    const { data } = useBlogs();
    return (
        <div>
            <AppBar />
            {Array.from({ length: 2 }).map((_, i) => (
                <BlogPostStatic key={i} />
            ))}
            {data?.post?.map((blog, i) => i > 5 && (<BlogPost blog={blog} />))}
            {/* <BlogHeader />
            <BlogActions />
            <BlogContent />
            <BlogTags />
            <BlogActions />
            <BlogFooter /> */}
        </div>
    );
}

export default Blogs;
