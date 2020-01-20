# React/React Native/Redux TypeScript Snippets

![Version](https://img.shields.io/visual-studio-marketplace/v/vadymbiliuk.ts-react-snippets.svg)
![Rating](https://img.shields.io/visual-studio-marketplace/r/vadymbiliuk.ts-react-snippets.svg)
![Installs](https://img.shields.io/visual-studio-marketplace/i/vadymbiliuk.ts-react-snippets.svg)

Snippets for React/React Native/Redux with JavaScript and TypeScript lovers

### Link for marketplace extension

https://marketplace.visualstudio.com/items?itemName=vadymbiliuk.ts-react-snippets

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
import React from "react";
```

### `impt`

```typescript
import PropTypes from "prop-types";
```

### `cc`

```typescript
import React, { Component } from "react";

export interface IYourFileName {}
export interface IYourFileName {}

export class YourName extends Component<IYourFileName, IYourFileName> {
  state = {};

  render() {
    return <div />;
  }
}
```

### `cpc`

```typescript
import React, { Component } from "react";

export interface IYourFileName {}

export class YourFileName extends Component<YourFileName> {
  render() {
    return <div />;
  }
}
```

### `fc`

```typescript
import React from "react";

export interface IYourFileName {}

export const YourFileName: React.FC<IYourFileName> = ({}) => {
  return <div />;
};
```

## React Native snippets

### `imrn`

```typescript
import { ModuleName } from "react-native";
```

### `ncc`

```typescript
import React, { Component } from "react";
import { View } from "react-native";

export interface IYourFileName {}
export interface IYourFileName {}

export class YourName extends Component<IYourFileName, IYourFileName> {
  state = {};

  render() {
    return <View />;
  }
}
```

### `ncpc`

```typescript
import React, { Component } from "react";
import { View } from "react-native";

export interface IYourFileName {}

export class YourFileName extends Component<YourFileName> {
  render() {
    return <View />;
  }
}
```

### `nfc`

```typescript
import React from "react";
import { View } from "react-native";

export interface IYourFileName {}

export const YourFileName: React.FC<IYourFileName> = ({}) => {
  return <View />;
};
```

## React Hooks

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
import { connect } from "react-redux";
import { ViewName } from "ViewPath";

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ViewName);
```

### `createStore`

```typescript
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const preloadedState = {};

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  preloadedState,
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
});
```

### `createReducer`

```typescript
import { createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

const middleware = [...getDefaultMiddleware()];

export const FileName = createReducer(INITIAL_STATE, {
  [ActionType]: (state, action) => {}
});
```

### `createAction`

```typescript
import { createAction } from "@reduxjs/toolkit";

export const ActionName = createAction(ActionType);
```

### `createSlice`

```typescript
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

export const FileName = createSlice({
  name: "FileName",
  initialState: INITIAL_STATE,
  reducers: {
    [ActionType]: (state, action) => {}
  }
});
```

## Redux Hooks

### `useSelector`

```typescript
const selectedData = useSelector(state => state.YourObject);
```

### `useDispatch`

```typescript
const dispatch = useDispatch();
```

### `useStore`

```typescript
const store = useStore();
```

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
export function funcName(): funcReturnType {}
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
