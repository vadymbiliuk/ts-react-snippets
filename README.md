# Extension for TypeScript/JavaScript React users

# Supported languages and file extensions

### JavaScript

`.js/.jsx`

### TypeScript

`.ts/.tsx`

# Usage

## Please hit combination for snippet search:

### MacOS

`cmd + shift + p`

### Windows/Linux

`ctrl + shift + p`

# Snippets overview

## React snippets

Please remember that examples below created for TypeScript. They are same for JavaScript in .js/.jsx files but without TypeScript features like interface etc.

### `imr`

```typescript
import React from 'react';
```

### `impt`

```typescript
import PropTypes from 'prop-types';
```

### `cc`

```typescript
import React, { Component } from 'react';

export interface IYourFileName {}
export interface IYourFileName {}

export class Test extends Component<IYourFileName, IYourFileName> {
  state = {};

  render() {
    return <div />;
  }
}
```

### `cpc`

```typescript
import React, { Component } from 'react';

export interface IYourFileName {}

export class YourFileName extends Component<YourFileName> {
  render() {
    return <div />;
  }
}
```

### `fc`

```typescript
import React from 'react';

export interface IYourFileName {}

export const Test: React.FC<IYourFileName> = () => {
  return <div />;
};
```

### `useState`

```typescript
const [state, setstate] = useState(defaultState);
```

### `useEffect`

```typescript
useEffect(() => {}, []);
```

### `useContext`

```typescript
const value = useContext(MyContext);
```

### `useReducer`

```typescript
const [state, dispatch] = useReducer(reducer, initialState);
```

### `useCallback`

```typescript
const memoizedCallback = useCallback(() => {}, []);
```

### `useMemo`

```typescript
const memoizedValue = useMemo(() => {}, []);
```

### `useRef`

```typescript
const refContainer = useRef(initialValue);
```

### `useImperativeHandle`

```typescript
useImperativeHandle(initialValue, () => {}, []);
```

### `useLayoutEffect`

```typescript
useLayoutEffect(() => {}, []);
```

### `useDebugValue`

```typescript
useDebugValue(value);
```

## Redux

### `condux`

```typescript
import { connect } from 'react-redux';
import { ViewName } from 'ViewPath';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewName);
```

### `condux`

## Native TypeScript

Please remember that all native TypeScript snippets are included in .tsx files too

### `int`

```typescript
export interface IInterfaceName {}
```

### `tp`

```typescript
export type TypeName = type;
```

### `func`

```typescript
export function funcName() {}
```

### `afunc`

```typescript
export const funcName = (): funcReturnType => {};
```

### `cls`

```typescript
export class className {
  // Fields:
  private readonly _fieldName: fieldType;

  // Properties:
  public fieldName: fieldType = propertyValue;

  constructor() {
    this._fieldName = this.fieldName;
  }
}
```

### `acls`

```typescript
export abstract class className {
  // Properties:
  public propertyName: propertyType = propertyValue;
}
```

### `cpf`

```typescript

private readonly _fieldName: fieldType;

```

### `cpp`

```typescript

public propertyName: propertyType = propertyValue;

```

## Contributing

Pull requests are always welcome in develop branch. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
