import 'package:flutter/material.dart';

class LocationDetail extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Hola bebe"),
        ),
        body: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Container(
                decoration: BoxDecoration(
                  color: Colors.red.shade100,
                ),
                child: const Text('Maluma'),
              ),
              Container(
                decoration: BoxDecoration(
                  color: Colors.green.shade100,
                ),
                child: const Text('Diego'),
              ),
              Container(
                decoration: BoxDecoration(
                  color: Colors.blue.shade100,
                ),
                child: const Text('Kamila'),
              )
            ]));
  }
}
