'use client';

import { Button, Input } from '@heroui/react';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

import { task } from '@/utils/interface';
import { ButtonType } from '@/utils/constants';
import { filter } from '@/utils/filter';
import TaskItem from '@/components/task-item';

export default function Home() {
  const [tasks, setTasks] = useState([
    { name: 'Сделать верстку', completed: false },
    { name: 'Запрограммировать интерфейс', completed: false },
    { name: 'Написать тесты', completed: false },
  ]);
  const [task, setTask] = useState('');
  const [filterType, setFilterType] = useState(ButtonType.ALL);

  const completed = false;
  const leftTasks = tasks.filter((task) => task.completed === completed).length;

  const clickAddHandler = () => {
    if (task) {
      const element = { name: task, completed: false };

      setTasks([...tasks, element]);
      setTask('');
    }
  };

  const changeInputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTask(evt.target.value);
  };

  const completeTask = (item: task) => {
    setTasks(tasks.map((task) => (task === item ? { ...task, completed: !task.completed } : task)));
  };

  const deleteCompletedTasks = () => {
    setTasks([...tasks.filter((task) => task.completed === false)]);
    setFilterType(ButtonType.ALL);
  };

  return (
    <div className='max-w max-h-full mx-auto bg-gray-300'>
      <p className='font-[Roboto] font-thin text-center text-9xl text-red-300 mb-2.5'>todos</p>
      <div className='max-w-3xl mx-auto mb-2.5 bg-gray-100 rounded-xl'>
        <div className='flex w-full'>
          <Input
            className='font-[Roboto] font-thin rounded-r-none'
            placeholder='Enter new task'
            type='text'
            value={task}
            variant='bordered'
            onChange={changeInputHandler}
          />
          <Button
            className='font-[Roboto] font-thin rounded-l-none'
            color='primary'
            onPress={clickAddHandler}
          >
            Add
          </Button>
        </div>
      </div>
      <div className='max-w-3xl mx-auto p-0.5 font-[Roboto] font-thin italic text-4xl text-gray-300 bg-gray-100 border-b-2 border-gray-300 shadow-lg shadow-gray-400'>
        <div className='flex align-middle'>
          <BsChevronDown display={'inline'} /> What needs to be done?
        </div>
      </div>

      <div className='max-w-3xl mx-auto bg-gray-100'>
        {[...filter[filterType](tasks)].map((task) => (
          <TaskItem
            key={task.name}
            task={task}
            onComplete={completeTask}
          />
        ))}
      </div>

      <div className='max-w-3xl mx-auto p-0.5 pl-3 font-[Roboto] font-thin text-4xl text-gray-300 bg-gray-100 border-b-2 border-gray-300 shadow-lg shadow-gray-400'>
        <div className='flex justify-between font-[Roboto] font-thin text-[16px] text-center'>
          <div className='bg-transparent text-gray-400'>{leftTasks} items left</div>
          <div className='flex gap-1'>
            <Button
              className='font-[Roboto] font-thin bg-transparent text-400'
              onPress={() => setFilterType(ButtonType.ALL)}
            >
              All
            </Button>
            <Button
              className='font-[Roboto] font-thin bg-transparent text-400'
              onPress={() => setFilterType(ButtonType.ACTIVE)}
            >
              Active
            </Button>
            <Button
              className='font-[Roboto] font-thin bg-transparent text-400'
              onPress={() => setFilterType(ButtonType.COMPLETED)}
            >
              Completed
            </Button>
          </div>

          <Button
            className='font-[Roboto] font-thin bg-transparent text-400 hover:border-1'
            onPress={deleteCompletedTasks}
          >
            Clear completed
          </Button>
        </div>
      </div>
    </div>
  );
}
