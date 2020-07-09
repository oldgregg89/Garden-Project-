export class PlantService {
  getPlant(containerProp, flowers, water, life, shade, durability) {
    let assets = [];
    fetch(`https://cors-anywhere.herokuapp.com/trefle.io/api/plants?token=${process.env.API_KEY}&complete_data=true&propagated_by_container=${containerProp}&flower_conspicuous=${flowers}&moisture_use=${water}&lifespan=${life}&shade_tolerance=${shade}&drought_tolerance=${durability}`)
      .then(response => response.json())
      .then(json => {
        json.map(element => {
        assets.push(element.id);
      })
    })
    return assets;
  }
}

export class GetPlantInfo {
  getPrices(assets) {
    console.log(assets)
    const promises = assets.map(async asset => {
      return await fetch (`https://trefle.io/api/plants/${asset}?token=${process.env.API_KEY}`)
        .then(response => response.json())
    })
    return Promise.all(promises)
  }
}

  function getAssests(assets) {
    .then(assets => {
      return getPrices(assets)
        .then(prices => console.log(prices))
    })
  }


// function getPrices() {
//   console.log(assets)
//   const promises = assets.map(async asset => {
//     return await fetch (`https://trefle.io/api/plants/${asset}?token=${process.env.API_KEY}`)
//       .then(response => response.json())
//   })
//   return Promise.all(promises)
// }

// const symbols = ['id']

// getAssests(symbols)
//   .then(assets => {
//     return getPrices(assets)
//       .then(prices => console.log(prices))
//   })
  