import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ViewBook() {
    const params = useParams();
    const [book, setBook] = useState({});

    const listBook = async () => {
        const response = await fetch(`http://localhost:5000/api/books/${params.bookId}`);
        const data = await response.json();
        console.log(data.book);
        setBook(data.book);
    }

    useEffect(() => {
        listBook();
    }, []);
    
    return (
        <div>
          
            <h1>{book.name}</h1> 
            <h3>{book.description}</h3> 
            <h2>{book.author}</h2>
            <h4>{book.price}</h4>


            <NavLink to="/">Go back</NavLink>
        </div>
    );
}

export default ViewBook;
