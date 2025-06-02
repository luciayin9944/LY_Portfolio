import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("")
    const fullText = "<Hello World />"

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index> fullText.length) {
                clearInterval(interval);

                // Call onComplete after short delay
                setTimeout(() => {
                    console.log("Loading complete")
                    onComplete()
                }, 1000)
            }
        }, 150)

        return () => clearInterval(interval);
    }, [onComplete]);




    return (
        <div className="fixed inset-0 a-50 bg-black text-pink-300 flex flex-col items-center justify-center "> 
            <div className="text-6xl font-mono">
                {text}
            </div>
        </div>
    );
};