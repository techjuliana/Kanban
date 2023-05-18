import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    Atividades: [
      {
        id: uuidv4(),
        column: ColumnType.ATIVIDADES,
        title: 'Atividade exemplo',
        color: 'blue.300',
      },
    ],
    'Em andamento': [
      {
        id: uuidv4(),
        column: ColumnType.EM_ANDAMENTO,
        title: 'Atividade exemplo',
        color: 'yellow.300',
      },
    ],
    Bloqueado: [
      {
        id: uuidv4(),
        column: ColumnType.BLOQUEADO,
        title: 'Atividade exemplo',
        color: 'red.300',
      },
    ],
    Concluido: [
      {
        id: uuidv4(),
        column: ColumnType.CONCLUIDO,
        title: 'Atividade exemplo',
        color: 'green.300',
      },
    ],
  });
}

export default useTaskCollection;
