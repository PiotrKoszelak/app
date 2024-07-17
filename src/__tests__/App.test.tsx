import { fireEvent, render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import App from '../App';

const server = setupServer(
    http.post(`${import.meta.env.VITE_SERVER_URL}/chat`, () => {
        return HttpResponse.json({
            reply: 'hello there',
        });
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Displays all elements', async () => {
    render(<App />);

    expect(screen.getByText('Chat Bot')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Displays a new answer', async () => {
    render(<App />);

    expect(screen.queryByRole('answer')).not.toBeInTheDocument();

    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'Hello' } });

    fireEvent.click(screen.getByText('Send'));

    await screen.findByRole('answer');

    expect(screen.getByRole('answer')).toHaveTextContent('hello there');
});

test('Displays proper error', async () => {
    server.use(
        http.post(`${import.meta.env.VITE_SERVER_URL}/chat`, () => {
            return new HttpResponse(null, { status: 500 });
        })
    );

    render(<App />);

    expect(screen.queryByRole('answer')).not.toBeInTheDocument();

    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'Hello' } });

    fireEvent.click(screen.getByText('Send'));

    await screen.findByRole('answer');

    expect(screen.getByRole('answer')).toHaveTextContent(
        'Oops, failed to fetch!'
    );
});
