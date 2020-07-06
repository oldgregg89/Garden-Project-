export class PlantService {
  async getPlant() {
    try {
      let response = await fetch(`https://trefle.io/api/plants?token=${process.env.API_KEY}&drought_tolerance=medium`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
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
  async getZip(zipCode) {
    try {
      // let zipResponse = await fetch(`https://c0bra.api.stdlib.com/zipcode-to-hardiness-zone/?zipcode=${zipCode}`);
      let zipResponse = await fetch(`https://phzmapi.org/${zipCode}.json`);
      let jsonifiedZipResponse;
      if (zipResponse.ok && zipResponse.status === 200) {
        jsonifiedZipResponse = await zipResponse.json();
      } else {
        jsonifiedZipResponse = false;
      }
      // console.log(jsonifiedZipResponse);
      return jsonifiedZipResponse;
    } catch(error) {
      return false;
    }
  }
}