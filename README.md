# node-express-basic-example

이 프로젝트는 Node.js 환경에서 Express를 활용하여 웹 애플리케이션을 개발하기 위한 기본 템플릿입니다. Express를 사용하여 간단한 서버를 설정하고, 정적 파일을 서빙하며, JSON API를 제공하는 기본적인 기능을 구현합니다. Node.js와 Express의 핵심 개념을 학습하고 실습할 수 있는 예제입니다.

## 프로젝트 구조

```plaintext
node-express-basic-example/
│
├── node_modules/         # 프로젝트의 의존성이 저장된 디렉토리
├── public/               # 정적 파일 (HTML, CSS, JS 등) 저장 디렉토리
│   ├── index.html        # 기본 HTML 파일
│   └── main.css          # 기본 스타일 시트
├── package-lock.json     # 정확한 의존성 버전을 기록한 파일
├── package.json          # 프로젝트 메타데이터 및 의존성 관리 파일
├── README.md             # 프로젝트 설명서
└── server.js             # Express 서버 설정 및 라우팅 파일
```

## 기술 스택

- **Node.js**: JavaScript 런타임 환경
- **npm**: 패키지 관리 도구
- **Express**: Node.js 웹 애플리케이션 프레임워크
- **Nodemon**: 파일 변경 시 자동으로 서버를 재시작해주는 도구

## 사용 방법

1. `npm install` 명령어를 통해 프로젝트의 의존성을 설치합니다.
2. `npm run dev` 명령어를 통해 개발 서버를 실행합니다.
3. 브라우저에서 `http://localhost:3000`로 접근하여 프로젝트를 확인할 수 있습니다.

## 파일 설명

- `server.js`: Express 서버를 설정하고 라우팅을 정의하는 파일입니다. 서버는 public 디렉토리의 정적 파일을 제공하며, /greet 및 /users 경로에서 데이터를 제공합니다.
- `public/`: CSS, JavaScript, 이미지 파일 등 정적 파일이 저장된 디렉토리입니다. 현재 index.html과 main.css 파일이 포함되어 있습니다.
- `index.html`: 기본 HTML 파일로, public 디렉토리에 위치하여 클라이언트에게 제공됩니다. 이 파일은 버튼을 클릭하여 서버에서 인사 메시지를 가져오고, 사용자 목록을 표시하는 기능을 포함하고 있습니다.
- `main.css`: 기본 스타일 시트로, index.html에 적용되는 CSS 파일입니다.

## 주요 라우팅 및 기능

- `GET /`: `public/index.html` 파일을 클라이언트에게 제공합니다.
- `GET /greet`: JSON 형식으로 인사 메시지를 반환합니다. 예시 반환 데이터:

```json
{ "message": "안녕하세요!!!!" }
```

- `GET /users`: JSON 형식으로 사용자 목록을 반환합니다. 예시 반환 데이터:

```json
[
  { "name": "kim", "email": "kim@gmail.com" },
  { "name": "park", "email": "park@gmail.com" },
  { "name": "lee", "email": "lee@gmail.com" }
]
```

## 참고 자료

- [Express 공식 문서](https://expressjs.com/)
- [nodemon 공식 문서](https://www.npmjs.com/package/nodemon)

## License

[MIT License](LICENSE).
