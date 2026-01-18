const map = L.map("map").setView([33.442, 129.969], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

fetch("data/hikiyama_classification.geojson")
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: feature => {
        return {
          color: "#b44",
          weight: 2,
          fillOpacity: 0.5
        };
      }
    }).addTo(map);
  });
