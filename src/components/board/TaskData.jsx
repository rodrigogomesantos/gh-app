const cardData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Take out the garbage', author: 'Victória Maziero', authorImg:'1616197630575.jfif' },
      'task-2': { id: 'task-2', content: 'Watch my favorite show', author: 'Victória Maziero', authorImg:'1616197630575.jfif'  },
      'task-3': { id: 'task-3', content: 'Charge my phone', author: 'Victória Maziero', authorImg:'1616197630575.jfif' },
      'task-4': { id: 'task-4', content: 'Cook dinner', author: 'Victória Maziero', authorImg:'1616197630575.jfif' },
      'task-5': { id: 'task-5', content: 'Charge my phone', author: 'Victória Maziero', authorImg:'1616197630575.jfif' },
      'task-6': { id: 'task-6', content: 'Cook dinner', author: 'Victória Maziero', authorImg:'1616197630575.jfif' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'TO DO',
        taskIds: ['task-1', 'task-2', 'task-3'],
      },
      'column-2': {
        id: 'column-2',
        title: 'DOING',
        taskIds: ['task-4'],
      },
      'column-3': {
        id: 'column-3',
        title: 'DONE',
        taskIds: [ ],
      },
      'column-4': {
        id: 'column-4',
        title: 'SUPER DONE',
        taskIds: [ ],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
  };
  
  export default cardData;
  