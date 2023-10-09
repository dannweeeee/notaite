import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypewriterTitle = (props: Props) => {
    return (
        <Typewriter 
            options={{
                loop: true, // loop indefinitely
            }}
            onInit={(typewriter) => {
                typewriter.typeString("🚀 Supercharge Productivity.")
                .pauseFor(250).deleteAll()
                .typeString("🤖 AI-Powered Note-Taking.")
                .pauseFor(250).deleteAll()
                .start();
            }}
        />
    )
    }

export default TypewriterTitle