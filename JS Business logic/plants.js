export class PlantService {
  async getPlant(containerProp, flowers, water, life, shade, durability) {
    try {
      let response = await fetch(`https://cors-anywhere.herokuapp.com/trefle.io/api/plants?token=${process.env.API_KEY}&complete_data=true&propagated_by_container=${containerProp}&flower_conspicuous=${flowers}&moisture_use=${water}&lifespan=${life}&shade_tolerance=${shade}&drought_tolerance=${durability}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }
}
