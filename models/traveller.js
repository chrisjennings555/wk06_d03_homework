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

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
