# vesuvio-hooks

vesuvio-hooks is a React Hook library for dealing with session and local storage

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install vesuvio-hooks.

```bash
npm i vesuvio-hooks
```

## Usage

```javascript
import { StorageType, useDebounceStorage } from 'vesuvio-hooks';

export const Exemple = ()=>{

  const [value , setValue] = useDebounceStorage("value","default",StorageType.local,200);

  return (
      <div>
        <input onChange={(e)=>setValue(e.target.value)}/>
        <br/>
        {value}
      </div>
  );
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)