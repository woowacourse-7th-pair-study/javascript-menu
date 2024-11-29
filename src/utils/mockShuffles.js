import { MissionUtils } from '@woowacourse/mission-utils';

const mockShuffles = (rows) => {
	MissionUtils.Random.shuffle = jest.fn();

	rows.reduce((acc, [firstNumber, numbers]) => {
		return acc.mockReturnValueOnce([
			firstNumber,
			...numbers.filter((number) => number !== firstNumber),
		]);
	}, MissionUtils.Random.shuffle);
};

export default mockShuffles;
