const car = {
  model: "M8 Coupe",
  make: "BMW",
  color: "",
  horsepower: 617,
  carYear: 2022,
  transmission: "stick",
  sound: function () {
    alert("Vroom Vroom");
  },

  get year() {
    return this.carYear;
  },

  set updateColor(color) {
    this.color = color;
  },
};

const team = {
  teamName: "Los Angeles Lakers",
  founded: 1947,
  rosterTotal: 17,
  championships: 17,
  coach: "Frank Vogel",
  coachYells: function () {
    alert("Play Defense!!!!");
  },

  get currentCoach() {
    return this.coach;
  },

  set newRoster(newPlayers) {
    this.rosterTotal = newPlayers;
  },
};

const animal = {
  name: "Lion",
  maxWeight,
  order: "Carnivora",
  location: ["Africa", "Asia", "Europe"],
  roar: function () {
    alert("Roarrrrrrrrrrrr!");
  },

  get lionLocation() {
    return this.location;
  },

  set currentWeight(maxWeight) {
    return (this.maxWeight = maxWeight);
  },
};
