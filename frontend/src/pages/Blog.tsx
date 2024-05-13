import AppBar from "@/components/discuss/AppBar";
import BlogPost from "@/components/discuss/BlogPost";
import React from "react";

// type Props = {}

function Blog() {
    return (
        <div>
            <AppBar />
            {Array.from({ length: 10 }).map((_) => (
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
