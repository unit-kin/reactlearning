import React, { useState } from 'react'
// understanding how form validation works 
const Forms = () => {
    const [text, setText] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault() // prevents page from refreshing on submission


        // Get the input value (you may want to add state for the input value)
        const newlist = e.target.elements.form1.value;
        // check if the input field is empty 
        if (newlist.trim() !== '') {
            setText((prevName) => [...prevName, newlist])

            // Clear the input field
            e.target.elements.form1.value = '';
        }


    }
    return (
        <div>Forms
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter name' name='form1' />
                <button>Submit</button>
            </form>
            {text}

        </div>
    )
}

export default Forms