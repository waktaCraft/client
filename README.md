# WAKTACRAFT 클라이언트

## 실행방식
### 개발모드
```bash
npm start
```
1. npm start 실행 시 ```cross-env BROWSER=none npm run react:start``` 명령어와 ```cross-env NODE_ENV=development npm run electron:start``` 명령어가 동시에 실행됩니다.
2. react:start 명령어는 react 프로젝트를 실행시키고, electron:start 명령어는 electron 프로젝트를 실행시킵니다.
3. react 프로젝트는 3000번 포트를 사용하고, electron 프로젝트는 3000번 포트가 실행될 때까지 기다립니다.
4. react 프로젝트가 실행되면 electron 프로젝트는 react 프로젝트를 렌더링합니다.

### 빌드모드
```bash
npm run build
```
1. npm run build 실행 시 ```npm run react:build``` 명령어를 실행 후 ```npm run electron:build``` 명령어를 실행합니다.
2. react:build 명령어는 react 프로젝트를 빌드하고, electron:build 명령어는 electron 프로젝트를 윈도우로 빌드합니다.
3. 빌드가 완료되면 dist 폴더에 빌드된 파일이 생성됩니다.