import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './components/Card';
import './App.css';
import { useFetch } from './hooks/useFetch';

const breakPoints = [
  { width: 375, itemsToShow: 2.1 },
  { width: 768, itemsToShow: 2.2 },
  { width: 1024, itemsToShow: 3 },
  { width: 1280, itemsToShow: 3 },  
];

function App() {

  const { loading, customerData } = useFetch('https://api.jsonbin.io/b/6107fbe9f14b8b153e05e714');

  const handlePublicInformationTrack = (): string | undefined => {
    // @ts-ignore: Object is possibly 'null'.
    if(customerData
    .personal
    .publicInfo
    .courtAndInsolvencies
    .length !== 0) {
      return "OFF TRACK"
    } else {
      return "ON TRACK"
    } 
  }
  
  return (
    <div className="App">
      <Carousel
      breakPoints={breakPoints}
      isRTL={false}>
        <Card 
          header={"Public information"} 
          body={'Bankruptcies and individual voluntary arrangements can damage your score'} 
          impact={"HIGH IMPACT"}
          track={
            "OFF TRACK"}
          />

      </Carousel>
      
    </div>
  );
}

export default App;
