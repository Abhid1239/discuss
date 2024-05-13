import AppBar from "@/components/discuss/AppBar";
import BlogPost from "@/components/discuss/BlogPost";

// type Props = {}

function Blog() {
    return (
        <div>
            <AppBar />
            {Array.from({ length: 10 }).map(() => (
                <BlogPost />
            ))}
            {/* <BlogHeader />
            <BlogActions />
            <BlogContent />
            <BlogTags />
            <BlogActions />
            <BlogFooter /> */}
        </div>
    );
}

export default Blog;
