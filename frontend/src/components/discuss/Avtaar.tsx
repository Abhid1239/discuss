// import React from "react";

type Props = {
    isImage?: boolean;
    imgLink?: string;
    cred?: string;
    size?: "sm" | "md" | "lg";
};

function Avtaar({
    isImage = false,
    imgLink = "",
    cred = "",
    size = "md",
}: Props) {
    const imgSize =
        size === "sm" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-10 h-10";

    return (
        <div
            className={`${imgSize} relative inline-flex items-center justify-center 
                        overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
        >
            {isImage ? (
                <img
                    className={`${imgSize} rounded-full`}
                    src={imgLink}
                    alt="Rounded avatar"
                />
            ) : (
                <span className="font-medium text-gray-600 dark:text-gray-300 uppercase">
                    {cred}
                </span>
            )}
        </div>
    );
}

export default Avtaar;
