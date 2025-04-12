import { Checkbox } from '@heroui/react';
import { useState } from 'react';

import { task } from '@/utils/interface';

interface TaskListProps {
  task: task;
  onComplete: (task: task) => void;
}

export default function TaskItem({ task, onComplete }: TaskListProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className='pl-1 pb-2 border-b border-gray-300 font-[Roboto] font-thin text-5xl'>
      <Checkbox
        lineThrough
        className='text-8xl'
        color='success'
        isSelected={isSelected}
        radius='full'
        size='lg'
        onChange={() => onComplete(task)}
        onValueChange={setIsSelected}
      >
        {task.name}
      </Checkbox>
    </div>
  );
}
