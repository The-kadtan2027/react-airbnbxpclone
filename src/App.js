import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <section  className="card-list">

      {data.map(person => {
        return(

      <Card 
        key={person.id}
        img={person.coverImg}
        rating={person.stats.rating}
        reviewCount={person.stats.reviewCount}
        location={person.location}
        title={person.title}
        price={person.price}
        onSpot={person.openSpots}
        
      />
        )

      })}
      </section>
    </div>
  );
}

export default App;
