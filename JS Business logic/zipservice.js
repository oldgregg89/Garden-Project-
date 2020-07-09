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
