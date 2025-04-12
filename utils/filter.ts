import { ButtonType } from './constants';
import { task } from './interface';

const filter = {
  [ButtonType.ALL]: (tasks: task[]) => [...tasks],
  [ButtonType.ACTIVE]: (tasks: task[]) => [...tasks.filter((task) => task.completed === false)],
  [ButtonType.COMPLETED]: (tasks: task[]) => [...tasks.filter((task) => task.completed === true)],
};

export { filter };
