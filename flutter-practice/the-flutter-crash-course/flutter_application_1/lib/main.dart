import 'package:flutter/material.dart';
import './Mocks/mock_locationclass.dart';
import 'location_detail.dart';
import './modules/location.dart';

void main() {
  final Location mocklocation = MockLocation.fetchany();
  return runApp(MaterialApp(home: LocationDetail(mocklocation)));
}

//MaterialApp() es un constructor para crear una instacia de material App
// importarte investigar sobre Material Design