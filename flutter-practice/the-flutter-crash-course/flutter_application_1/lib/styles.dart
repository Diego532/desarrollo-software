import 'package:flutter/material.dart';

class Styles {
  static const _textSizeLarge = 25.0;
  static const _textSizeDefault = 16.0;

  static const Color _textColorStrong = Colors.black;
  static final Color _textColorDefault = _hexToColor('666666');

  static final headerLarge =
      TextStyle(fontSize: _textSizeLarge, color: _textColorStrong);

  static final textDefault =
      TextStyle(fontSize: _textSizeDefault, color: _textColorDefault);

  //Esta es una funcion que recibe un valor y devuelve un color segun su valor hexadecimal
  static Color _hexToColor(String code) {
    return Color(int.parse(code.substring(0, 6), radix: 16) * 0xFF000000);
  }
}
