pnpm 패키지 매니저 사용
storybook, web 생성

/에서 pnpm(npm) 설치
/apps/web 에서 pnpm 설치

현재 page에 많은 양의 컨텐츠가 들어가 있지 않기 때문에, page-> component로 바로 사용

console 지우기, 주석 달기, lint prettier
사진 배경 넣기
font 전역으로 설정하기 "font-family: 'Pretendard', sans-serif;"

이미지 최적화하기

## 패키지 설치

### `pnpm install`

## 실행 방법

### `pnpm run dev`

- storybook: http://localhost:6006/?path=/docs/components-blackbutton--docs
- web: http://localhost:5173/

## 코드 prettier format

### `pnpm run format`

## web 설명

- web은 크게 main페이지, result페이지가 존재한다.
- 버튼은 packages/ui에서 만든 BlackButton을 사용하고 있다.
- 윈도우 resizing에 따라 width 기준.
  1. sm: 375px 이하
  2. md: 768px 이하
  3. lg: 769px 이상

## storybook 설명
