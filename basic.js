window.onload = () => {
  let testEntityAdded = false;

  const el = document.querySelector("[gps-new-camera]");

  el.addEventListener("gps-camera-update-position", (e) => {
    if (!testEntityAdded) {
      alert(
        `Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`
      );
      // Add a box to the north of the initial GPS position
      const entity = document.createElement("a-box");
      entity.setAttribute("scale", {
        x: 20,
        y: 20,
        z: 20,
      });
      entity.setAttribute("material", { color: "red" });
      entity.setAttribute("gps-new-entity-place", {
        latitude: e.detail.position.latitude + 0.001,
        longitude: e.detail.position.longitude,
      });
      document.querySelector("a-scene").appendChild(entity);

      // Add a sphere to the east of the initial GPS position
      const entity1 = document.createElement("a-sphere");
      entity1.setAttribute("scale", {
        x: 20,
        y: 20,
        z: 20,
      });
      entity1.setAttribute("material", { color: "yellow" });
      entity1.setAttribute("gps-new-entity-place", {
        latitude: e.detail.position.latitude,
        longitude: e.detail.position.longitude + 0.001,
      });
      document.querySelector("a-scene").appendChild(entity1);

      // Add a cylinder to the south of the initial GPS position
      const entity2 = document.createElement("a-cylinder");
      entity2.setAttribute("scale", {
        x: 20,
        y: 20,
        z: 20,
      });
      entity2.setAttribute("material", { color: "orange" });
      entity2.setAttribute("gps-new-entity-place", {
        latitude: e.detail.position.latitude - 0.001,
        longitude: e.detail.position.longitude,
      });
      document.querySelector("a-scene").appendChild(entity2);
    }
    testEntityAdded = true;
  });
};
