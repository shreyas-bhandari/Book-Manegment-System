import { useState } from 'react';
import { NavLink } from "react-router-dom";


function CreateBook() {
    const [name, setName] = useState('');
    const [description, setDiscription] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);


    const addBook = async () => {

        const response = await fetch('http://localhost:5000/api/books/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                description,
                author,
                price
                
            })
        })
        const data = await response.json()

        console.log(data);
    }

    const addBookButton = (e) => {
        
        e.preventDefault();
        console.log(name);
        console.log(description);
        console.log(author);
        console.log(price);

        addBook()
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Add your form submission logic here
    }

    return (
        <div>
            <h1>Create Book</h1>

            
            <form onSubmit={addBookButton} >
                <div>
                    <input onChange={(e) => setName(e.target.value)}  type="text" placeholder='Enter book name' />
                </div>
                <div>
                    <textarea onChange={(e) => setDiscription(e.target.value)} placeholder="Enter description"></textarea>
                </div>
                <div>
                    <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder='Enter author name' />
                </div>
                <div>
                    <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Enter price' />
                </div>
                <button onClick={addBookButton}>Add Book</button>

                <br />
                <br />
                <br />

                <NavLink to={'/'}>Go Back</NavLink>


                
            </form>
        </div>
    )
}

export default CreateBook;
