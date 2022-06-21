import Character from "./components/CharacterOfSimpsonsFamily/Character";
import './App.css';
import charakter from "./components/CharakterOfRickAndMorty/charakter";

function App() {
  return (
    <div>
        <div>
        <Character name={'bart'}
                   desc={'qwertyu asdfghj zxcvbnm rtyuio'}
                   img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdtTZgYlJu08e3pXFzj2xEUnBbS1KWTEGxuH55ll1fQ&s'}
                   />
        <Character name={'homer'}
                   desc={'qwertyu asdfghj zxcvbnm rtyuio'}
                   img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbYl3JwNHDQ4laGFCnxUNIgsEjXbPjmtjlyhMAuwZ&s'}
        />
        <Character name={'marge'}
                   desc={'qwertyu asdfghj zxcvbnm rtyuio'}
                   img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDS9ib9IAbjbg5K2kF0_6FOxYEosU2vIiQ89Ci56g&s'}
        />
        <Character name={'lisa'}
                   desc={'qwertyu asdfghj zxcvbnm rtyuio'}
                   img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP30X6e76_mmNE6EFTvznmx3I9X7XjHAa0gEI-ot_S&s'}
        />
        <Character name={'maggie'}
                   desc={'qwertyu asdfghj zxcvbnm rtyuio'}
                   img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTog7EmKImYlPtgTxiH19KHT1tjqOgF6NV-Xx9oH7LaAw&s'}
        />
        </div>
        <div>
        <charakter
                    id={1}
                   name={'rick'}
                   status={'alive'}
                   species={'human'}
                   gender={'male'}
                   image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
        />
        <charakter
                    id={2}
                   name={'morty'}
                   status={'alive'}
                   species={'human'}
                   gender={'male'}
                   image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
        />
        <charakter
                    id={3}
                   name={'summer'}
                   status={'alive'}
                   species={'human'}
                   gender={'female'}
                   image={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}
        />
        <charakter
                    id={4}
                   name={'beth'}
                   status={'alive'}
                   species={'human'}
                   gender={'female'}
                   image={"https://rickandmortyapi.com/api/character/avatar/4.jpeg"}
        />
        <charakter
                    id={5}
                   name={'jerry'}
                   status={'alive'}
                   species={'human'}
                   gender={'male'}
                   image={"https://rickandmortyapi.com/api/character/avatar/5.jpeg"}
        />
        <charakter
                    id={6}
                   name={'abadango'}
                   status={'alive'}
                   species={'alien'}
                   gender={'female'}
                   image={"https://rickandmortyapi.com/api/character/avatar/6.jpeg"}
        />
        </div>
    </div>
  );
}

export default App;
