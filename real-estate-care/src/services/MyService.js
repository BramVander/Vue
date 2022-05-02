class MyService {
  constructor() {
    // geen construction
  }

  async getInspections() {
    try {
      const response = await fetch("http://localhost:3000/inspections");
      if (!response.ok) {
        throw new Error(`error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("service-data", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default MyService;
