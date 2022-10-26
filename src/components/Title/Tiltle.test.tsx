import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './index';



test('render title component', () => {
        render(
            <div>
                <Title>Teste</Title>
            </div>
        );
        const linkElement = screen.getByText(/Teste/i);
        expect(linkElement).toBeInTheDocument();
});

test('show the component on the screen',()=>{
    render(
        <div>
            <Title>Teste</Title>
        </div>
    );
    expect(screen.getByText('Teste')).toHaveTextContent('Teste')
});



