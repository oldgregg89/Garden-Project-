let assets = [];

export class PlantService {
  async getPlant(containerProp, flowers, water, life, shade, durability) {
    try {
      let response = await fetch(`https://trefle.io/api/plants?token=${process.env.API_KEY}&complete_data=true&propagated_by_container=${containerProp}&flower_conspicuous=${flowers}&moisture_use=${water}&lifespan=${life}&shade_tolerance=${shade}&drought_tolerance=${durability}`);
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

export class ZipService {
  async getZip(zipCode) {
    try {
      let zipResponse = await fetch(`https://phzmapi.org/${zipCode}.json`);
      let jsonifiedZipResponse;
      if (zipResponse.ok && zipResponse.status === 200) {
        jsonifiedZipResponse = await zipResponse.json();
      } else {
        jsonifiedZipResponse = false;
      }
      return jsonifiedZipResponse;
    } catch (error) {
      return false;
    }
  }
}
