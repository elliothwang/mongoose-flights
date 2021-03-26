const mongoose = require('mongoose');
const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

function index (req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights})
  })
};

function newFlight (req, res) {
  res.render('flights/new', { title: 'New Flight'});
};

function create (req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new');
    // redirect
    res.redirect('/flights');
  });
}

function show (req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', { title: "Flight Details", flight});
  })
};