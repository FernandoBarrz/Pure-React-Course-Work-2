import { useState } from "react";

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const BREEDS = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          ></input>
        </label>
        <label htmlFor="animal">
            <select value={animal}
            onChange={e => setAnimal(e.target.value)}
            id="animal"
            onBlur={e => setAnimal(e.target.value)}
            >
            <option/> 
            {
                ANIMALS.map(animal => (
                    <option value={animal} key={animal}>
                        {animal}
                    </option>
                ))
            }  
            </select>
        </label>
        <label htmlFor="breed">
            Breed
            <select value={breed}
            onChange={e => setBreed(e.target.value)}
            id="animal"
            onBlur={e => setBreed(e.target.value)}
            >
            <option/> 
            {
                BREEDS.map(breed => (
                    <option value={breed} key={breed}>
                        {breed}
                    </option>
                ))
            }  
            </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
