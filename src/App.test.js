import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

it('renders "Book Author" title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const caption = screen.getByText(/Book Author/i);
  expect(caption).toBeInTheDocument();
});
