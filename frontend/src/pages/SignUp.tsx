// import React from 'react'
import AuthForm from '@/components/discuss/AuthForm'
import Logo from '@/components/discuss/Logo'
import Qoute from '@/components/discuss/Qoute'
import { Link } from 'react-router-dom'
// type Props = {}

const SignUp = () => {
    return (
        <>
            <div className={" container relative min-h-screen flex-col items-center justify-center  grid md:max-w-none  md:grid-cols-2 px-0 "}>
                <div className="bg-zinc-900 relative hidden h-full flex-col bg-muted p-10 text-white md:flex dark:border-r">
                    <Logo />
                    <Qoute />
                </div>
                <Link
                    to="/login"
                    className={
                        "absolute right-4 top-4 md:right-8 md:top-8"
                    }
                >
                    Log In
                </Link>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 md:w-[350px] px-2">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <AuthForm type="signup" />
                    </div>
                </div>
            </div >
        </>
    )
}

export default SignUp
