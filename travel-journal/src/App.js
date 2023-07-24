import './App.css';
import Data from "./data";
import Card from './components/card';

function App() {
  const cards_list = Data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className='parent'>
      <div className='navbar'><span className='icon'><i class="fa-sharp fa-solid fa-globe"></i></span> &nbsp; My Travel Journey</div>
      <div className='cards'>
        {cards_list}
      </div>
    </div>
  );
}

export default App;
