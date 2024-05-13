// import React from "react";
import Avtaar from "./Avtaar";
import { BookMarked, MinusCircleIcon, MoreHorizontal } from "lucide-react";

// type Props = {};

const BlogPost = () => {
    return (
        <div className=" mx-6 pt-6 border-b border-grey-400">
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
                    <a
                        href=""
                        rel="noopener follow"
                        className="flex justify-center flex-col md:mr-12 sm:mr-8 mr-6"
                    >
                        <h2 className="text-lg font-bold text-gray-900 pb-2 line-clamp-2">
                            4 useState Mistakes You Should Avoid in React🚫
                        </h2>
                        <p className="text-sm text-gray-600 line-clamp-3 sm:line-clamp-4">
                            Introduction React.js has become a cornerstone of modern web
                            development, with its unique approach to managing state within
                            components...
                        </p>
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
                    </a>
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
        </div>
    );
};

export default BlogPost;
