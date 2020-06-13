-rf# @flagcard/exception

Exception lib for projects in javascript

**Table of Contents**

- [Installation](#installation)
- [Why ?](#why-)
- [Documentation](#documentation)

## Installation

`@flagcard/exception` is available from `npm`.

```
$ npm i -S @flagcard/exception
```

## Why ?

Centralize exceptions used in microservices

## Documentation

BadRequestException

```js
const { BadRequestException } = require('@flagcard/exception');
throw new BadRequestException('custon message');
```

MethodNotAllowedException

```js
const { MethodNotAllowedException } = require('@flagcard/exception');
throw new MethodNotAllowedException('custon message');
```

NotFoundException

```js
const { NotFoundException } = require('@flagcard/exception');
throw new NotFoundException('custon message');
```

UnauthorizedUserException

```js
const { UnauthorizedUserException } = require('@flagcard/exception');
throw new UnauthorizedUserException('custon message');
```

Custom Exception

```js
const { Exception } = require('@flagcard/exception');
class CustomException extends Exception {
  constructor(message) {
    super(message);
    // do something fun
  }
}
```


License
-------

The code is available under the [MIT License](LICENSE.md).
