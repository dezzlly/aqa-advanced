const fetchResidentsFromReturnOfTheJedi = async () => {
    try {
      // Fetch the film data for "Return of the Jedi"
      const filmResponse = await fetch('https://swapi.dev/api/films/3/');
      const filmData = await filmResponse.json();
  
      // Fetch all planets from the film
      const planetPromises = filmData.planets.map(async (url) => {
        const res = await fetch(url);
        return res.json();
      });
      const planets = await Promise.all(planetPromises);
  
      // Fetch all residents for each planet
      const planetsWithResidents = await Promise.all(
        planets.map(async (planet) => {
          const residentPromises = planet.residents.map(async (url) => {
            const res = await fetch(url);
            return res.json();
          });
          const residents = await Promise.all(residentPromises);
          const residentNames = residents.map(resident => resident.name);
          return { planetName: planet.name, residents: residentNames };
        })
      );
  
      console.log(planetsWithResidents);
    } catch (error) {
      console.error('Error fetching residents from Return of the Jedi:', error);
    }
  };
  
  fetchResidentsFromReturnOfTheJedi();
  