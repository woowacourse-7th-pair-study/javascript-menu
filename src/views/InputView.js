import { Console } from '@woowacourse/mission-utils';

const readPipe = (promptMessage) => {
  try {
    return Console.readLineAsync(promptMessage);
  } catch (error) {
    throw new Error(error.message);
  }
}

const InputView = {
  async readCoachesName() {
    return await readPipe('\n코치의 이름을 입력해 주세요. (, 로 구분)\n');
  },

  async readMenuCannotEat(name) {
    return await readPipe(`\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`);
  },
}

export default InputView;
