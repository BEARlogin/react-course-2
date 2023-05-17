import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//components
import ErrorModal from "./components/Errors/ErrorModal"

//styles
import './App.css';
import {fetchBooks} from "./actions/book-actions";
import {fetchSelections} from "./actions/selection-actions";
import { ThemeProvider } from './context/ThemeContext';
import { ThemeSelector } from './components/ThemeSelector';
import { BooksWrapper } from './components/BooksWrapper';
import { SelectionsWrapper } from './components/SelectionsWrapper';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks)
    dispatch(fetchSelections)
  }, [dispatch])

  return (
    <>
      <ThemeProvider>
          <ThemeSelector />
          <BooksWrapper />
          <SelectionsWrapper />
          <ErrorModal />
      </ThemeProvider>
    </>
  );
}

export default App;
