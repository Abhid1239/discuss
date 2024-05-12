import React from 'react'

type Props = {}

const Qoute = (props: Props) => {
    return (
        <blockquote className="space-y-2">
            <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
        </blockquote>
    )
}

export default Qoute