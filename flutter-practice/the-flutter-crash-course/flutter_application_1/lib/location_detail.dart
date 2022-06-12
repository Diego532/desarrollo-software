import 'package:flutter/material.dart';
import './modules/location.dart';
import './styles.dart';

class LocationDetail extends StatelessWidget {
  final Location location;

  LocationDetail(this.location);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(location.name),
        ),
        body: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: _renderbody(context, location)));
  }

  List<Widget> _renderbody(BuildContext context, Location location) {
    var result = <Widget>[];
    result.add(_bannerimage(
        'https://ps-attachments.s3.amazonaws.com/cc810a17-c903-405a-b914-be7622637dc2/ixTAUT5DNBKQzZaBAixIkA.jpg',
        170.0));
    result.addAll(_renderfacts(context, location));

    return result;
  }

  List<Widget> _renderfacts(BuildContext context, Location location) {
    var result = <Widget>[];
    for (int i = 0; location.facts.length > i; i++) {
      result.add(_sectiontitle(location.facts[i].title));
      result.add(_sectionfact(location.facts[i].text));
    }
    return result;
  }

  Widget _sectiontitle(String title) {
    return Container(
        padding: const EdgeInsets.fromLTRB(25.0, 25.0, 25.0, 10.0),
        child: Text(
          title,
          textAlign: TextAlign.left,
          style: Styles.headerLarge,
        ));
  }

  Widget _sectionfact(String text) {
    return Container(
        padding: const EdgeInsets.fromLTRB(25.0, 15.0, 25.0, 15.0),
        child:
            Text(text, textAlign: TextAlign.left, style: Styles.textDefault));
  }

  Widget _bannerimage(String url, double height) {
    return Container(
      constraints: BoxConstraints.tightFor(height: height),
      child: Image.network(url, fit: BoxFit.fitWidth),
    );
  }

  /*Widget _section(String title, Color color) {
    return Container(
      decoration: BoxDecoration(
        color: color,
      ),
      child: Text(title),
    );
  }*/
}
