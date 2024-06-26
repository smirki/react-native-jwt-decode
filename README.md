# react-native-jwt-decode

Generate and decode JWTs inside of React Native applications seamlessly.

This library provides a simple and consistent approach to encoding and decoding JSON Web Tokens (JWT) in React Native without the dependency on native modules, making it ideal for use with Expo and other pure JS environments.

## Features

- Decoding of JWT tokens with support for standard claims such as `exp`, `nbf`, `iat`, `sub`, `iss`, and `aud`.
- Simple and easy-to-use API designed specifically for React Native applications.
- Pure JavaScript implementation with no native dependencies.

## Installation

`npm install react-native-jwt-decode`

Usage
-----

To decode a JWT token:

```
import { decode } from 'react-native-jwt-decode';
const token = 'your.jwt.token';
const decoded = decode(token);
console.log(decoded); // The decoded payload of the JWT
```

Setting Up Your Development Environment
---------------------------------------

To contribute to this library, you should have Node.js installed. Once you have cloned the repository, install the dependencies:


`npm install`

### Testing

This library uses Jest for testing. Run the tests with:


`npm test`

### Building

To transpile the source code from ES6+ to compatible JavaScript, run:


`npm run build`

Contributing
------------

Contributions are welcome! Please read the [contributing guide](https://github.com/smirki/react-native-jwt-decode/CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

Support
-------

If you encounter any problems or have suggestions, please open an issue on the [GitHub repository](https://github.com/smirki/react-native-jwt-decode/issues).

License
-------

This project is licensed under the MIT License - see the [LICENSE](https://github.com/smirki/react-native-jwt-decode/LICENSE) file for details.