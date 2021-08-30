import React, {createContext, useState, useReducer, useEffect} from 'react'
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    // const [books, setBook] = useState([
    //         {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    //         {title: 'the final empire', author: 'brandon sanderson', id: 2},
    //     ])

    // const addBook = (title, author) => {
    //     setBook([...books, {title, author, id: uuid()}])
    // }
    // const removeBook = (id) => {
    //     setBook(books.filter(book => book.id !== id))
    // }

    // using reducer bcz when the number of handlers increases the code becomes hard to read and maintain
    // in reducer we just pass on fn i.e dispatch which handles all the functionalities

    // intialise the data with whats already there in the localstorage instead of [],
    // in this case 2nd arg will be ignored and 3rd will be considered

    const [books, dispatch] = useReducer(bookReducer, [], () => {
       const localData = localStorage.getItem("books");
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books))
    }, [books])


    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider