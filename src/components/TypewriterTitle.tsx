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
                typewriter.typeString("\u{1F680} Supercharge Productivity.")
                .pauseFor(250).deleteAll()
                .typeString("\u{1F916} AI-Powered Note-Taking.")
                .pauseFor(250).deleteAll()
                .start();
            }}
        />
    )
    }

export default TypewriterTitle