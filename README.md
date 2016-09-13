# react-rxd
Realstax style guide as React components

#### Build Status

| `master`  |   [![master](https://circleci.com/gh/Realstax/react-rxd/tree/master.svg?circle-token=7627b03eca20675838b80a577e51edab0763c613)](https://circleci.com/gh/Realstax/react-rxd/tree/master)  |
|-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `develop` | [![develop](https://circleci.com/gh/Realstax/react-rxd/tree/develop.svg?circle-token=7627b03eca20675838b80a577e51edab0763c613)](https://circleci.com/gh/Realstax/react-rxd/tree/develop) |

# How to use
```npm i react-rxd --save```

######Includes are made on a per component basis to reduce build footprint.
######Be sure to minimize and dedupe in your production build since the components in `react-rxd` includes vendor dependencies by default.
```
const Avatar = require('react-rxd/dist/Avatar')
..
<Avatar size="large">
  <img src="img.png" role="presentation" />
</Avatar>

```

# WIP
- Docs
- `Grid`, `TextAlignment`, `Visibility` currently depend on `react-foundation-components`. We will be refactoring this to remove the dependency.