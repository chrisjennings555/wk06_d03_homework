const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    const journeyStarts = journey.startLocation;
    return journeyStarts;
})
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    const journeyEnds = journey.endLocation;
    return journeyEnds;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((vehicle) => {
    return vehicle.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const allDistances = this.journeys.map((journey) => {
    const distances = journey.distance;
    return distances;
  })
  const total = allDistances.reduce((accum, distance) => {
    return accum += distance;
  }, 0);
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
