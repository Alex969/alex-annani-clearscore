import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './components/Card';
import './App.css';

const breakPoints = [
  { width: 375, itemsToShow: 2.1 },
  { width: 768, itemsToShow: 2.2 },
  { width: 1024, itemsToShow: 3 },
  { width: 1280, itemsToShow: 3 },  
];

function App() {
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
