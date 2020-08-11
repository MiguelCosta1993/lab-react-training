import React from 'react';
import './App.css';
import IdCard from './components/IdCard.jsx';
import './components/IdCard.css';
import Greetings from './components/Greetings';
import './components/Greetings.css';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

function App() {
  return (
    <div className="App">
      {/* iteration 1 */}
      <h1>Id Card</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h1>Credit cards</h1>
      <CreditCard
        type="Visa"
        number="0123456789010995"
        expirationMonth={10}
        expirationYear={2021}
        bank="Santander"
        owner="Aníbal Cavaco Silva"
        bgColor="040403"
        color="#c3e8bd"
      />
      <h1>Rating</h1>
      <Rating>3.5</Rating>
      <h1>Driver cards</h1>
      <DriverCard
        name="Dara Khosrowshahi"
        rating={0.2}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
    </div>
  );
}

export default App;
