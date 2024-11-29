export const MENU_CATEGORY_NUM = Object.freeze({
	1: '일식',
	2: '한식',
	3: '중식',
	4: '아시안',
	5: '양식',
});

export const MENU = Object.freeze({
	[MENU_CATEGORY_NUM[1]]: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	[MENU_CATEGORY_NUM[2]]: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	[MENU_CATEGORY_NUM[3]]: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	[MENU_CATEGORY_NUM[4]]: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	[MENU_CATEGORY_NUM[5]]: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
});

export const INPUT_MESSAGES = Object.freeze({
	COACH_NAME: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
	MENU: (name) => `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
});

export const ERROR_MESSAGES = Object.freeze({
	// coachesName
	NAME_LENGTH: '[ERROR] 코치 이름은 2에서 4글자 사이여야 합니다. 다시 입력해 주세요.',
	NUM_OF_COACHES: '[ERROR] 코치 인원 수는 2명에서 5명 사이여야 합니다. 다시 입력해 주세요.',
	DUPLICATE_COACHES_NAME: '[ERROR] 코치들의 이름은 중복될 수 없습니다. 다시 입력해 주세요.',

	// menusCannotEat
	NUM_OF_MENUS: '[ERROR] 각 코치별 못 먹는 메뉴 개수는 0 ~ 2개 사이여야 합니다. 다시 입력해 주세요.',
	DUPLICATE_MENUS: '[ERROR] 메뉴 이름은 중복될 수 없습니다. 다시 입력해 주세요.',
	NON_EXIST: '[ERROR] 존재하지 않는 메뉴입니다. 다시 입력해 주세요.',
});
