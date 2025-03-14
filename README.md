## 패키지 설치

### `pnpm install`

## 실행 방법

### `pnpm run dev`

- storybook: http://localhost:6006/?path=/docs/components-blackbutton--docs
- web: http://localhost:5173/

## 코드 prettier format

### `pnpm run format`

### Production

- https://frontend-toggle-1z3na3i7x-sunnys-projects-81896182.vercel.app

## web 설명

- web은 크게 main페이지, result페이지가 존재한다.
- page자체에는 많은 content가 존재하지 않기 때문에, component로 사용하고 있다.
- 버튼은 packages/ui에서 만든 BlackButton을 사용하고 있다.
- 윈도우 resizing에 따라 width 기준.
  1. sm: 375px 이하
  2. md: 768px 이하
  3. lg: 769px 이상

## storybook 설명

- BlackButton
  1. 디폴트
  2. width 변경 가능
  3. fontSize 변경 가능
  4. 클릭 이벤트
  5. 클릭 후 button 500ms동안 loading

## 현재 해결하지 못한 것들

- 이미지 렌더링 느림 현상

## 생각

- 터보레포를 처음 사용해 본다. 초반에 설치와 설정에서 다소 시간이 필요했다.
- 피그마에서 font-size나 height-size 미세하게 다른 부분이 있어서 세심하게 확인해야 한다.
- 조회한 url를 사용해 배경을 만드는 부분, effect(blur, opacity) 같은 부분이 명확하지 않았다.
- 초반에 css 확장자로 설계를 했었지만, 개발하면서 media-screen-size를 고려하면서 scss 확장자로 수정.
