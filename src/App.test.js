import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test("the counter starts at 0", () => { 
  render(<App/>);
  const cnt = screen.getByTestId('count');

  expect(cnt).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App/>);
  const button = screen.getByTestId('minus');

  expect(button).toHaveTextContent('-');
});

test("plus button has correct text", () => {
  render(<App/>);
  const button = screen.getByTestId('plus');

  expect(button).toHaveTextContent('+');
 });

test("When the + button is pressed, the counter changes to 1", () => { 
  render(<App/>);
  const button = screen.getByTestId('plus');
  const cnt = screen.getByTestId('count');
  fireEvent.click(button);

  expect(cnt).toHaveTextContent('1');
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App/>);
  const button = screen.getByTestId('minus');
  const cnt = screen.getByTestId('count');
  fireEvent.click(button);

  expect(cnt).toHaveTextContent('-1');
 });

test("on/off button has blue color", () => {
  render(<App/>);
    const button = screen.getByRole('button', {
        name: "on/off"
    });

  expect(button).toHaveStyle("backgroundColor: skyblue");
});

test("Prevent the -, + button from being pressed when the on/off button is clicked", () => {
  render(<App/>);
  const minus = screen.getByTestId('minus');
  const plus = screen.getByTestId('plus');
  const onoff = screen.getByTestId('on_off');
  const cnt = screen.getByTestId('count');
  
  fireEvent.click(onoff);

  fireEvent.click(minus);
  expect(cnt).toHaveTextContent('0');

  fireEvent.click(plus);
  expect(cnt).toHaveTextContent('0');

});

