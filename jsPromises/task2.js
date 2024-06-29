const fetchHanSoloStarshipsPromise = () => {
    fetch('https://swapi.dev/api/people/14/')
      .then(response => response.json())
      .then(data => {
        const starshipPromises = data.starships.map(url => fetch(url).then(res => res.json()));
        return Promise.all(starshipPromises);
      })
      .then(starships => {
        const starshipNames = starships.map(starship => starship.name);
        console.log(starshipNames);
      })
      .catch(error => console.error('Error fetching Han Solo\'s starships:', error));
  };
  
  fetchHanSoloStarshipsPromise();

  
  const fetchHanSoloStarshipsAsync = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/14/');
      const data = await response.json();
      const starshipPromises = data.starships.map(async (url) => {
        const res = await fetch(url);
        return res.json();
      });
      const starships = await Promise.all(starshipPromises);
      const starshipNames = starships.map(starship => starship.name);
      console.log(starshipNames);
    } catch (error) {
      console.error('Error fetching Han Solo\'s starships:', error);
    }
  };
  
  fetchHanSoloStarshipsAsync();
  