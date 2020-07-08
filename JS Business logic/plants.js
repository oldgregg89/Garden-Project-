export class PlantService {
  async getPlant() {
    try {
      let response = await fetch(`https://trefle.io/api/plants?token=${process.env.API_KEY}&complete_data=true`);
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

// export class PlantDescription {
//   async getInfo() {
//     try {
//       let plantData = await fetch (`https://trefle.io/api/plants/${plantsReturn.id}$?token=${process.env.API_KEY}&complete_data=true&temperature_minimum_deg_f=32`
//       );
//       let jsonifiedResponse;
//       if (response.ok && response.status == 200) {
//         jsonifiedResponse = await response.json();
//       } else {
//         jsonifiedResponse = false;
//       }
//       return jsonifiedResponse;
//     } catch (error) {
//       return false;
//     }
//   }
// }

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

// export class PlantService2 {
//   async getPlant() {
//     try {
//       let response = await fetch(`https://trefle.io/api/plants?token=${process.env.API_KEY}&complete_data=true&temperature_minimum_deg_f=32`);
//       let jsonifiedResponse;
//       if (response.ok && response.status == 200) {
//         jsonifiedResponse = await response.json();
//       } else {
//         jsonifiedResponse = false;
//       }
//       return jsonifiedResponse;
//     } catch(error) {
//       return false;
//     }
//   }
// }
