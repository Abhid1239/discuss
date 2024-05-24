import React, { ChangeEvent } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signinInput, signupInput } from "@discuss1239/common"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Loader } from 'lucide-react';
import { BACKEND_URL } from '@/config'

function AuthForm({ type }: { type: "signup" | "login" }) {
    const [formData, setFormData] = React.useState<signupInput | signinInput>({
        name: "",
        email: "",
        password: "",
    })
    const [loading, setLoading] = React.useState<boolean>(false)
    const navigation = useNavigate();

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${BACKEND_URL}/user/${type === "signup" ? "signup" : "signin"}`,
                formData)
            const jwtToken = response.data;
            console.log(jwtToken.jwt);
            setLoading(false)
            window.localStorage.setItem('jwtToken', jwtToken.jwt);
            navigation("/blogs")
        }
        catch (err) {
            console.log(err);
            setLoading(false)

        }
    }
    const isButtonDisabled = formData.email && formData.password.length > 6
    return (
        <>
            <form action="#" className="space-y-6" method="POST">
                {type == "signup" && (<LabelInput labelName='Username' placeholder='Enter your name' onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                })} />)}
                <LabelInput labelName='Email' placeholder='Enter your email' type="email" onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                })} />
                <LabelInput labelName='Password' placeholder='password' type="password" onChange={e => setFormData({
                    ...formData,
                    password: e.target.value
                })} />
                <Button disabled={loading || !isButtonDisabled} className='w-full flex gap-2' onClick={handleSubmit}>
                    {loading && (
                        <Loader color='white' className='animate-spin' />
                    )}
                    <p>{type === 'signup' ? "Sign Up" : "Log In"}</p>
                </Button>
            </form >
            <PrivacyService />
        </>
    )
}

interface LabelInputType extends React.InputHTMLAttributes<HTMLInputElement> {
    labelName: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput({ labelName, placeholder, onChange, ...props }: LabelInputType) {
    return (
        <div>

            <Label className="block text-sm font-medium text-gray-700" htmlFor={labelName}>
                {labelName}
            </Label>
            <div className="mt-1">
                <Input
                    autoComplete={labelName}
                    onChange={onChange}
                    id={labelName}
                    name={labelName}
                    placeholder={placeholder}
                    required
                    type="text"
                    {...props}
                />
            </div>
        </div>
    )
}

function PrivacyService() {
    return (
        <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
            >
                Terms of Service
            </Link>{" "}
            and{" "}
            <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
            >
                Privacy Policy
            </Link>
            .
        </p>
    )
}
export default AuthForm