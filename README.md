# 🗓 Calander
일정을 관리할 수 있는 캘린더 앱 만들기 과제입니다.

![Calendar](/readme-assets/vc_calander_viewer.gif)

---

## Feature
- 현재 날짜 기준으로 일간, 주간 달력을 볼 수 있습니다.
- 원하는 날짜에 일정을 등록하고, 수정/삭제가 가능합니다.
- 일정을 클릭하면 상세한 스케쥴을 확인할 수 있습니다.

## How to run
- Package installation & Running local server
```sh
npm install
npm start
```

## How to Use
- 구글 소셜 로그인 후, 캘린더 화면을 볼 수 있습니다.
- 왼쪽 메뉴에서 Daily를 클릭하면 일간 캘린더, Weekly를 클릭하면 주간 캘린더를 볼 수 있습니다.
- 날짜는 오늘을 기준으로 노출됩니다.
- [Create Event] 버튼을 누르면 일정을 등록할 수 있습니다.
- 이벤트명, 설명, 기간을 설정 후 [Submit]을 누르면 일정이 생성됩니다.
- 등록한 일정은 캘린더에서 볼 수 있고, 해당 일정을 누르면 상세한 정보를 확인할 수 있습니다.
- 일정 상세 페이지에서 일정 수정/삭제가 가능합니다.

## Tech Stack
- ES2015+
- React
- React-router-dom
- Redux
- Firebase Auth, Realtime database
- React-testing-library
