import React, { useState } from "react";


function MyAccordian({question, answer}) {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className="flex bg-teal-50 p-3 rounded-md shadow-md">
                <p className="bg-white mx-2 px-2 rounded-full cursor-pointer shadow shadow-blue-200" onClick={() => setShow(!show)}>
                    {show ? "-" : "+"}
                </p>
                <h3>{question}</h3>
            </div>
            { show && <p className="bg-red-50 p-2 rounded-sm shadow-md text-sm">{answer}</p> }
            <br/>
            
        </>
    )
}

export default MyAccordian