## 완성 예시

<img src='https://github.com/rlatkd/ManagementSystem/blob/main/image/management.PNG'>

## Windows PowerShell settings

```
get-help Set-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned
```

## change React version to v16.7.0

```
// package.json
{
    ...
    "dependencies": {
        "@material-ui/core": "^3.8.1",
        "@material-ui/icons": "^3.0.1",
        "axios": "^0.18.0",
        "react": "^16.7.0",
        "react-dom": "^16.7.0",
        "react-scripts": "2.1.2"
    },
    ...
}

// shell
npm install --save react@^16.7.0 react-dom@16.7.0

// index.js
...
ReactDOM.render(<App />,document.getElementById('root'));
...
```

## Yarn

```
yarn init
yarn add react react-dom
yarn add --dev webpack webpack-dev-server
yarn add --dev babel-core babel-loader babel-preset-react-app
yarn add --dev webpack-cli
```
