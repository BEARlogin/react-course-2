import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//components
import Selections from './components/Selections/Selections';
import AddBookToSelectionForm from './components/Selections/AddBookToSelectionForm';
import CreateSelectionForm from './components/Selections/CreateSelectionForm'
import ErrorModal from "./components/Errors/ErrorModal"

//styles
import './App.css';
import CreateBookForm from "./components/Books/CreateBookForm";
import Books from "./components/Books/Books";
import {fetchBooks} from "./actions/book-actions";
import {fetchSelections} from "./actions/selection-actions";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks)
    dispatch(fetchSelections)
  }, [dispatch])

  return (
    <>
    <div className="wrapper books_wrapper">
      <h2 className="page_title">Books</h2>
      <CreateBookForm />
      <Books />
    </div>
    <div className="wrapper selections_wrapper">
      <h2 className="page_title">Selections</h2>
      <CreateSelectionForm />
      <AddBookToSelectionForm />
      <Selections />
    </div>
    <ErrorModal />
    </>
  );
}

export default App;
