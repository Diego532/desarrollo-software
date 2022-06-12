import 'location_fact.dart';

class Location {
  final String name;
  final String url;
  List<LocationFact> facts;
  Location(this.name, this.url, this.facts);
}
