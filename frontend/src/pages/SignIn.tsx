import AuthForm from '@/components/discuss/AuthForm'
import Qoute from '@/components/discuss/Qoute'
import React from 'react'

type Props = {}


export default function SingIn() {
    return (
        <>
            <div className={`
                    container relative min-h-screen flex-col items-center
                     justify-center  grid md:max-w-none  md:grid-cols-2 px-0
                    `}>
                <a
                    href="/examples/authentication"
                    className={
                        "absolute right-4 top-4 md:right-8 md:top-8"
                    }
                >
                    Log In
                </a>
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white md:flex dark:border-r">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-xl font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-6 w-6"
                        >
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                        </svg>
                        Discuss
                    </div>
                    <div className="relative z-20 mt-auto">
                        <Qoute />
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 md:w-[350px] px-2">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            {/* <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p> */}
                        </div>
                        {/* <UserAuthForm /> */}
                        <AuthForm />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <a
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}