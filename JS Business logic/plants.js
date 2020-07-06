export class PlantService {
  async getPlant() {
    try {
      let response = await fetch(`https://trefle.io/api/plants?token=${process.env.API_KEY}&drought_tolerance=medium`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.join();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}


export class ZipService {
  async getZip() {
    try {
      let zipResponse = await fetch(`https://c0bra.api.stdlib.com/zipcode-to-hardiness-zone/?zipcode=${zipcode}`);
      let jsonifiedZipResponse;
      if (zipResponse.ok && zipResponse.status === 200) {
        jsonifiedZipResponse = await zipResponse.join();
      } else {
        jsonifiedZipResponse = false;
      }
      return jsonifiedZipResponse;
    } catch(error) {
      return false;
    }
  }
}