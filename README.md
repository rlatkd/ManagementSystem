## 완성 예시

<img src='https://github.com/rlatkd/ManagementSystem/blob/main/image/management.PNG'>

## Windows PowerShell settings

```
get-help Set-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned
```

## change React version to v17.0.2

```
// package.json
{
	"@testing-library/react": "^12.1.4",
	"react": "^17.0.2",
	"react-dom": "^17.0.2",
}

npm i

// index.js
import { render } from "react-dom";
...
const container = document.getElementById("root");
render(<App />, container);
```

## Yarn

```
yarn init
yarn add react react-dom
yarn add --dev webpack webpack-dev-server
yarn add --dev babel-core babel-loader babel-preset-react-app
yarn add --dev webpack-cli
```
