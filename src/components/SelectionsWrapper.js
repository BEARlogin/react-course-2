import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import CreateSelectionForm from './Selections/CreateSelectionForm';
import AddBookToSelectionForm from './Selections/AddBookToSelectionForm';
import Selections from './Selections/Selections';
import { SectionBackground } from './SectionBackground';

export const SelectionsWrapper = () => {
    const {themes} = useContext (ThemeContext);

    return <SectionBackground className={'wrapper selections_wrapper'} themeColorsMap={{[themes.dark]: 'grey'}}>
        <h2 className="page_title">Selections</h2>
        <CreateSelectionForm />
        <AddBookToSelectionForm />
        <Selections />
    </SectionBackground>
};

