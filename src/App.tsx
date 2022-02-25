import './App.css';
import Carousel from 'react-elastic-carousel';
import Card from './components/Card';
import { useFetch } from './hooks/useFetch';
import { CustomerDataType } from './types';

const breakPoints = [
  { width: 375, itemsToShow: 2.1 },
  { width: 768, itemsToShow: 2.2 },
  { width: 1024, itemsToShow: 3 },
  { width: 1280, itemsToShow: 3 },  
];

function App() {

  const { customerData } = useFetch('https://api.jsonbin.io/b/6107fbe9f14b8b153e05e714');

  const handlePublicInformationTrack = (cData: CustomerDataType) => {
    if(cData
    .personal
    .publicInfo
    .courtAndInsolvencies
    .length !== 0) {
      return "OFF TRACK"
    } else {
      return "ON TRACK"
    } 
  }
  
  const handleCreditUtilisationTrack = (cData: CustomerDataType) => {
    for (let i = 0; i < cData.accounts.length; i ++) {
      if (cData.accounts[i].accountCategory === "credit_cards") {
        if (cData.accounts[i].overview.balance.amount >= (cData.accounts[i].overview.limit.amount)/ 2) {
          return "OFF TRACK"
        } else {
          return "ON TRACK"
        } 
      }
    }
  }

  const handleElectoralRollTrack = (cData: CustomerDataType) => {
    for (let j = 0; j < cData.personal.electoralRoll.length; j++) {
      if (cData
        .personal
        .electoralRoll[j]
        .current === true) {
          return "ON TRACK"
        } else {
          return "OFF TRACK"
        }
    }
  }

  return (
    <>
      <div className='App'>
        <h1 className="title">Insights</h1>
        <Carousel 
        breakPoints={breakPoints}
        isRTL={false}>
        {customerData === null ? <div>Getting your insight ready ...</div> : 
        <Card 
          header={"Public information"} 
          body={'Bankruptcies and individual voluntary arrangements can damage your score'} 
          impact={"HIGH IMPACT"}
          track={
            handlePublicInformationTrack(customerData)}
          />}

        {customerData === null ? <div>Getting your insight ready ...</div> :
        <Card 
          header={"Credit utilisation"} 
          body={'Using more than 50% of your available credit can damage your score'} 
          impact={"MEDIUM IMPACT"}
          track={handleCreditUtilisationTrack(customerData)} 
          />}

        {customerData === null ? <div>Getting your insight ready ...</div> : 
        <Card 
          header={"Electoral roll"} 
          body={'Being on the electoral roll can improve your score'} 
          impact={"MEDIUM IMPACT"}
          track={handleElectoralRollTrack(customerData)} 
          />}
        {console.log(customerData)}
        </Carousel>
      </div>
    </>
  );
}



export default App;

