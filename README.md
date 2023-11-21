# JavaScript를 이용한 고객관리시스템 CRUD 웹 페이지 구현

## 0. 목차

- [시연](#1-시연)
- [스택](#2-Stack)
- [설정](#3-Settings)
- [후기](#4-후기)

## 1. 시연

<img src="https://github.com/rlatkd/ManagementSystem/blob/main/assets/preview.gif?raw=true">

## 2. Stack

### Frontend

- React ^16.7.0

### Backend

- Express ^4.16.4

### Database

- MySQL ^5.7

## 3. Settings

### Windows PowerShell policies

```
get-help Set-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned
```

### change React version to v16.7.0

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

### Yarn initialize

```
yarn init
yarn add react react-dom
yarn add --dev webpack webpack-dev-server
yarn add --dev babel-core babel-loader babel-preset-react-app
yarn add --dev webpack-cli
```

## 4. 후기

- server에서 지정한 port번호는 client의 `package.json`에서 proxy 값을 통해 지정시켜주면서 연동이 가능

- React는 App.js 폴더가 main이고, 여러 컴포넌트를 만들어 렌더링을 담당하는 `render()`에서 사용하고 배치하는 구조

- React의 라이프사이클에 대한 이해가 필요 (라이프사이클마다 생성주기가 다르기 때문에 적합한 시기를 찾아야함)

<img src = "https://github.com/rlatkd/ManagementSystem/blob/main/assets/lifeCycle.jpg">

- 컴포넌트를 렌더링하기위해 선언할때 인자값으로 메소드나 매개변수 값을 넘겨줄 수 있음

  > state와 props의 차이를 명확하게 알아야 함
  >
  > - props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값. 자식 컴포넌트는 props 값을 받아오기만 하고 받아온 걸 수정할 수는 없음
  > - state : 컴포넌트 내부에 선언. 내부에서 값을 변경할 수 있음

- 컴포넌트에서 생성자(constructor)를 만들고, bind로 함수를 실행하거나 직접 실행 함수를 통해 메소드 구현 가능

  아래와 같이 생성자 안에 바인드를 지정하면

  ```javascript
  this.stateRefresh = this.stateRefresh.bind(this);
  ```

  밖에서 메소드를 선언해주면 됨

  ```javascript
  stateRefresh() => {
      this.setState({
        customers: "",
        completed: 0,
        searchKeyword: ""
      });
      this.callApi()
        .then(res => this.setState({ customers: res }))
        .catch(err => console.log(err));
  }
  ```

  ###### 바인드 선언없이 바로 사용하려면?

  ```javascript
  stateRefresh = () => {
    this.setState({
      customers: "",
      completed: 0,
      searchKeyword: "",
    });
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  };
  ```

- AWS RDS를 통해 MySQL 데이터베이스를 생성하고, Node.js 서버로 연동시키는 방법 학습

  > database.json을 만들어 `host, user, password, port, database` 선언
  >
  > server.js에서 아래와 같이 connect
  >
  > ```javascript
  > const data = fs.readFileSync("./database.json");
  > const conf = JSON.parse(data);
  > const mysql = require("mysql");
  >
  > const connection = mysql.createConnection({
  >   host: conf.host,
  >   user: conf.user,
  >   password: conf.password,
  >   port: conf.port,
  >   database: conf.database,
  > });
  >
  > connection.connect();
  > ```

- git에 push할 때는 중요한 정보나 node_module 같이 용량이 크고 올릴 필요 없는 데이터들은 `.gitignore` 파일을 생성해서 제외시킬 수 있음

  ```
  node_modules

  # database
  /database.json

  # upload
  /upload
  ```

- 페이지 한글 글씨체 변경하기
  `@material-ui/core/styles`에서 `MuiThemeProvider, createMuiTheme`를 가져와야함

  이는 클라이언트의 index.js에서 사용. index.js는 리액트의 가상돔으로 app.js 전체를 렌더링하는 곳

  ```javascript
  import React from "react";
  import ReactDOM from "react-dom";
  import "./index.css";
  import App from "./App";
  import * as serviceWorker from "./serviceWorker";
  import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

  const theme = createMuiTheme({
    typography: {
      fontFamily: '"Noto Sans KR", serif',
    },
  });

  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      {" "}
      <App />{" "}
    </MuiThemeProvider>,
    document.getElementById("root")
  );

  serviceWorker.unregister();
  ```
