import { Console } from '@woowacourse/mission-utils';

const InputView = {
  readCoachesName() {
    try {
      return Console.readLineAsync('\n코치의 이름을 입력해 주세요. (, 로 구분)\n');
    } catch (error) {
      throw new Error(error.message);
    }
  },

  readMenuCannotEat(name) {
    try {
      return Console.readLineAsync(`\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`);
    } catch (error) {
      throw new Error(error.message);
    }
  },

}

export default InputView;
