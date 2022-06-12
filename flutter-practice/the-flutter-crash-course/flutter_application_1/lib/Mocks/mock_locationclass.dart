import '../modules/location.dart';
import '../modules/location_fact.dart';

class MockLocation extends Location {
  MockLocation(super.name, super.url, super.facts);

  static Location fetchany() {
    return Location('Kraquen Software', 'dmcontroller.com', <LocationFact>[
      LocationFact(
          'La empresa De Diego', 'Diego bastardo fundo kraquen en 2026'),
      LocationFact('La esposa Kamila', 'Vivienron felices pro siempre')
    ]);
  }
}
