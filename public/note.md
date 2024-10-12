# Next.js

## jsx
javascript + XML
리액트에서 사용하는 기본 문법/파일 형식
자바스크립트에서는 .js, .jsx 사용 -> .js로 통합
타입스크립트에서는 .tsx 만 사용

## RSC 리액트 서버 컴포넌트

서버 컴포넌트, 클라이언트 컴포넌트

Next.js 에서는 모든 컴포넌트를 기본적으로 서버 컴포넌트로 생각

클라이언트 컴포넌트는 시작줄에 "use client" 선언으로 구분

서버 컴포넌트는 async function 선언할 수 있음
클라이언트 컴포넌트는 async function 선언할 수 없음

서버 컴포넌트 - 정적인 컨텐츠 담거나, 서버에서 수행해야 하는 작업들
클라이언트 컴포넌트 - 사용자 인터렉션이 필요한 내용을 담음

유의하실 규칙

1. 서버 컴포넌트 안에 클라이언트 컴포넌트가 들어갈 수 있음
2. 클라이언트 컴포넌트 안에 서버 컴포넌트가 들어갈 수는 없음

- page.tsx : 페이지 표시를 위한 서버 컴포넌트
  - Form.tsx : 사용자 입력 폼을 처리하는 클라이언트 컴포넌트
    - ErrorView.tsx : 에러 출력을 위한 서버 컴포넌트
  - UserInfo.tsx : 로그인 후 사용자 정보가 표시되는 서버 컴포넌트
    - EditButton.tsx : 사용자가 클릭할 수 있는 수정 모드 전환 클라이언트 컴포넌트 


디렉토리 구조

- / 
  - /app
    - /page-2
      -depth-2
  - /components
  - utils
  - /...

- /src
  - /app
  - /utils
  - /...

### import alias

//alias 사용 안 할 경우
import { ComponentName } from '../../components/atoms/Button.tsx
//alias 사용할 경우
import { ComponentName } from '@/components/atoms/Button.tsx

## 클라이언트 컴포넌트의 위치




