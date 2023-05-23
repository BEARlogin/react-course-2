import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//components
import ErrorModal from "./components/Errors/ErrorModal"

//styles
import './App.css';
import { fetchBooks } from "./actions/book-actions";
import { fetchSelections } from "./actions/selection-actions";
import { ThemeProvider } from './context/ThemeContext';
import { ErrorProvider } from './context/ErrorContext';
import { ThemeSelector } from './components/ThemeSelector';
import { BooksWrapper } from './components/BooksWrapper';
import { SelectionsWrapper } from './components/SelectionsWrapper';
import { ErrorToast } from './components/ErrorToast/ErrorToast';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks)
    dispatch(fetchSelections)
  }, [dispatch])

  return (
    <ThemeProvider>
      <ErrorProvider>
        <ThemeSelector />
        <BooksWrapper />
        <SelectionsWrapper />
        <ErrorToast />
      </ErrorProvider>
    </ThemeProvider>
  );
}

export default App;
