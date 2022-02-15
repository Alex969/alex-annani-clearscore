import { render, screen } from "@testing-library/react";
import Card from '../components/Card';

test('renders first card with proper header, body, impact and on/off track tags', () => {
  render(<Card header="Public information" body='Bankruptcies and individual voluntary arrangements can damage your score' track='OFF TRACK' impact='HIGH IMPACT'/>);
  const headerElement = screen.getByText(/Public information/i);
  const bodyElement = screen.getByText(/Bankruptcies and individual voluntary arrangements can damage your score/i)
  const trackTag = screen.getByText(/OFF TRACK/i)
  const impactTag = screen.getByText(/HIGH IMPACT/i)
  expect(headerElement).toBeInTheDocument;
  expect(bodyElement).toBeInTheDocument;
  expect(trackTag).toBeInTheDocument;
  expect(impactTag).toBeInTheDocument;
})

