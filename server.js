const express = require("express");
const path = require("path");

// Express 애플리케이션 생성
const app = express();
// const port = 3000;

// 예제 사용자 데이터
const users = [
  { name: "kim", email: "kim@gmail.com" },
  { name: "park", email: "park@gmail.com" },
  { name: "lee", email: "lee@gmail.com" },
];

// 'public' 디렉토리의 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, "public")));

// 루트 경로('/')에서 index.html 제공
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// '/greet' 경로에서 인사 메시지 반환
app.get("/greet", (req, res) => {
  res.json({ message: "안녕하세요!!!!" });
});

// '/users' 경로에서 사용자 목록 반환
app.get("/users", (req, res) => {
  res.json(users);
});

// 지정된 포트에서 서버 시작 및 실행 중 메시지 출력
// app.listen(port, () => {
//   console.log(`서버 실행 중: http://localhost:${port}`);
// });

module.exports = app;
