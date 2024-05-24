// import React from "react";
import { Link } from "react-router-dom";
import Avtaar from "./Avtaar";
import { BookMarked, MinusCircleIcon, MoreHorizontal } from "lucide-react";

// type Props = {};

export const BlogPostStatic = ({ key }) => {
    return (
        <div className=" mx-6 pt-6 border-b border-grey-400" key={key}>
            <div className="flex items-center">
                <div className="flex items-center">
                    <Avtaar isImage={false} cred="AB" size="sm" />
                </div>
                <div className="flex items-center ml-2 w-full">
                    <p className="text-sm text-gray-600">Jayanth babu S</p>
                    <p className="text-sm text-gray-400">
                        <span className="mx-2">·</span>
                        <span>Jan 25, 2024</span>
                    </p>
                </div>
                {/* Continue converting other parts */}
            </div>
            <div className="flex flex-col mt-3">
                <div className="flex justify-between items-stretch">
                    <div className="flex justify-center flex-col md:mr-12 sm:mr-8 mr-6">
                        <a
                            href=""
                            rel="noopener follow"
                            className=""
                        >
                            <h2 className="text-lg font-bold text-gray-900 pb-2 line-clamp-2">
                                4 useState Mistakes You Should Avoid in React🚫
                            </h2>
                            <p className="text-sm text-gray-600 line-clamp-3 sm:line-clamp-4">
                                Introduction React.js has become a cornerstone of modern web
                                development, with its unique approach to managing state within
                                components...
                            </p>
                        </a>

                        <div className="hidden sm:flex sm:justify-start justify-between items-center py-4 text-sm text-gray-500">
                            <div className="flex items-center">
                                <a
                                    href="/tag/technology"
                                    rel="noopener follow"
                                    className="bg-gray-200 rounded-full px-3 py-1 mr-2"
                                >
                                    Technology
                                </a>
                                <span>5 min read</span>
                                <span className="px-2">·</span>
                            </div>
                            <div className="flex">
                                <button
                                    aria-label="Add to list bookmark button"
                                    className="p-2 rounded-full hover:bg-gray-200"
                                >
                                    <BookMarked />
                                </button>
                                <button
                                    aria-label="Show less like this"
                                    className="p-2 rounded-full hover:bg-gray-200"
                                >
                                    {/* SVG Minus Icon */}
                                    <MinusCircleIcon />
                                </button>
                                <button
                                    aria-label="More options"
                                    className="p-2 rounded-full hover:bg-gray-200"
                                >
                                    {/* SVG More Options Icon */}
                                    <MoreHorizontal />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch flex-auto flex-shrink-0">
                        <img
                            src="https://miro.medium.com/v2/resize:fill:224:224/1*YiZksL8bfzbVmq0DM3JHpw.png"
                            alt="img"
                            className=" mb-auto sm:w-28 sm:h-28 w-20 h-20 "
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className=" sm:hidden flex justify-between items-center py-4 text-sm text-gray-500">
                    <div className="flex items-center">
                        <a
                            href="/tag/technology"
                            rel="noopener follow"
                            className="bg-gray-200 rounded-full px-3 py-1 mr-2"
                        >
                            Technology
                        </a>
                        <span>5 min read</span>
                        <span className="px-2 sm:block hidden">·</span>
                    </div>
                    <div className="flex">
                        <button
                            aria-label="Add to list bookmark button"
                            className="p-2 rounded-full hover:bg-gray-200"
                        >
                            <BookMarked />
                        </button>
                        <button
                            aria-label="Show less like this"
                            className="p-2 rounded-full hover:bg-gray-200"
                        >
                            {/* SVG Minus Icon */}
                            <MinusCircleIcon />
                        </button>
                        <button
                            aria-label="More options"
                            className="p-2 rounded-full hover:bg-gray-200"
                        >
                            {/* SVG More Options Icon */}
                            <MoreHorizontal />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const BlogPost = ({ blog }) => {
    const {
        author,
        content,
        id,
        title
    } = blog;
    return (
        <div className=" mx-6 pt-6 border-b border-grey-400" key={id}>
            <div className="flex items-center">
                <div className="flex items-center">
                    <Avtaar isImage={false} cred={author.name.slice(0, 2)} size="sm" />
                </div>
                <div className="flex items-center ml-2 w-full">
                    <p className="text-sm text-gray-600">{author.name}</p>
                    <p className="text-sm text-gray-400">
                        <span className="mx-2">·</span>
                        <span>Jan 25, 2024</span>
                    </p>
                </div>
                {/* Continue converting other parts */}
            </div>
            <div className="flex flex-col mt-3">
                <div className="flex justify-between items-stretch">
                    <div className="flex justify-center flex-col md:mr-12 sm:mr-8 mr-6">
                        <Link to={`/blog/${id}`}>
                            <h2 className="text-lg font-bold text-gray-900 pb-2 line-clamp-2">
                                {title}
                            </h2>
                            <p className="text-sm text-gray-600 line-clamp-3 sm:line-clamp-4">
                                {content}
                            </p>
                        </Link>

                        <div className="hidden sm:flex sm:justify-start justify-between items-center py-4 text-sm text-gray-500">
                            <div className="flex items-center">
                                <a
                                    href="/tag/technology"
                                    rel="noopener follow"
                                    className="bg-gray-200 rounded-full px-3 py-1 mr-2"
                                >
                                    Technology
                                </a>
                                <span>5 min read</span>
                                <span className="px-2">·</span>
                            </div>
                            <div className="flex">
                                <button
                                    aria-label="Add to list bookmark button"
                                    className="p-2 rounded-full hover:bg-gray-200"
                                >
                                    <BookMarked />
                                </button>
                                <button
                                    aria-label="Show less like this"
                                    className="p-2 rounded-full hover:bg-gray-200"
                                >
                                    {/* SVG Minus Icon */}
                                    <MinusCircleIcon />
                                </button>
                                <button
                                    aria-label="More options"
                                    className="p-2 rounded-full hover:bg-gray-200"
                                >
                                    {/* SVG More Options Icon */}
                                    <MoreHorizontal />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end flex-auto flex-shrink-0">
                        <img
                            src="https://miro.medium.com/v2/resize:fill:224:224/1*YiZksL8bfzbVmq0DM3JHpw.png"
                            alt="img"
                            className=" mb-auto sm:w-28 sm:h-28 w-20 h-20 "
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className=" sm:hidden flex justify-between items-center py-4 text-sm text-gray-500">
                    <div className="flex items-center">
                        <a
                            href="/tag/technology"
                            rel="noopener follow"
                            className="bg-gray-200 rounded-full px-3 py-1 mr-2"
                        >
                            Technology
                        </a>
                        <span>{`${Math.floor(content.length / 100)}`} min read</span>
                        <span className="px-2 sm:block hidden">·</span>
                    </div>
                    <div className="flex">
                        <button
                            aria-label="Add to list bookmark button"
                            className="p-2 rounded-full hover:bg-gray-200"
                        >
                            <BookMarked />
                        </button>
                        <button
                            aria-label="Show less like this"
                            className="p-2 rounded-full hover:bg-gray-200"
                        >
                            {/* SVG Minus Icon */}
                            <MinusCircleIcon />
                        </button>
                        <button
                            aria-label="More options"
                            className="p-2 rounded-full hover:bg-gray-200"
                        >
                            {/* SVG More Options Icon */}
                            <MoreHorizontal />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
