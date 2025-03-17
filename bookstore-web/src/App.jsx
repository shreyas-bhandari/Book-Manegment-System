import { useEffect, useState } from "react";  
import { NavLink } from "react-router-dom";

function App(){

const [books, setBooks] = useState([]);
const [searchTerm, setSearchTerm] = useState('');


  const listBooks = async () => {
    const response = await fetch('http://localhost:5000/api/books');

    const data = await response.json();

    console.log(data.books);

    setBooks(data.books);

  }

  useEffect(()=>{
    listBooks();
  },[])

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
      <h1> <b>ㅤㅤㅤㅤ  ㅤㅤㅤㅤㅤㅤㅤ    ㅤㅤㅤ
        <u>Book Store Website </u></b> </h1>


        <input
  type="text"
  id="search-input"
  onKeyUp={(e) => setSearchTerm(e.target.value)}
  placeholder="search for Books...."
/>
      ㅤ
      <NavLink to={"/create-book"}>
      <h2>Create New</h2>
      <br />
    
      </NavLink>

      




      {books ?  (
        <div  >
        {
          books.map((book) => (
            <div key={book._id} >
            <h2>  {book.name}  </h2>
      


          <NavLink to={`/books/${book._id}`} >
            View Book
          </NavLink>  
            </div>
          ))
        }
          </div>
    ):(<div>
      <p>No books</p>
    </div>
    )}
    </div>
 )
}


export default App;
