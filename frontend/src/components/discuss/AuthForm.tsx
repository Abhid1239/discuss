import React from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
type Props = {}

function AuthForm({ }: Props) {
    return (
        <form action="#" className="space-y-6" method="POST">
            <div>
                <Label className="block text-sm font-medium text-gray-700" htmlFor="username">
                    Username
                </Label>
                <div className="mt-1">
                    <Input
                        autoComplete="username"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        required
                        type="text"
                    />
                </div>
            </div>
            <div>
                <Label className="block text-sm font-medium text-gray-700" htmlFor="email">
                    Email
                </Label>
                <div className="mt-1">
                    <Input autoComplete="email" id="email" name="email" placeholder="m@example.com" required type="email" />
                </div>
            </div>
            <div>
                <Label className="block text-sm font-medium text-gray-700" htmlFor="password">
                    Password
                </Label>
                <div className="mt-1">
                    <Input
                        autoComplete="current-password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                        type="password"
                    />
                </div>
            </div>
            <div>
                <Button
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="submit"
                >
                    Sign Up
                </Button>
            </div>
        </form>
    )
}

export default AuthForm