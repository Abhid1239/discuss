import React from "react";
import Logo from "./Logo";
import { Bell, NotebookPen, SearchSlash } from "lucide-react";
import Avtaar from "./Avtaar";

type Props = {};

const AppBar = (props: Props) => {
    return (
        <div className="block sticky top-0 z-50 bg-white">
            <div className="h-14 px-6 border-b border-gray-200 flex items-center">
                <div className="flex-auto flex items-center">
                    <Logo isLogoNamePresent={false} />
                    <SearchInput />
                </div>
                <div className="flex gap-5 items-center">
                    <div className="">
                        <NotebookPen />
                    </div>
                    <div className="hidden sm:block">
                        <Bell />
                    </div>
                    <div className="">
                        <Avtaar isImage={false} cred="AB" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const SearchInput = () => (
    <div className="relative mx-6 mr-8 rounded-3xl sm:w-auto w-full">
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm">
                <SearchSlash color="black" />
            </span>
        </div>
        <input
            type="text"
            className={`pr-9 pl-4 py-2.5 flex h-9 w-full rounded-3xl border-0 border-input 
        bg-gray-100 text-sm shadow-sm transition-colors file:border-0 
        file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground 
        focus-visible:outline-none 
        disabled:cursor-not-allowed disabled:opacity-50`}
        />
    </div>
);

export default AppBar;
