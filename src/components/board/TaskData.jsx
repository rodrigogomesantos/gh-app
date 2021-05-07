const cardData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Send an email update to the team: 9am today",
      author: "Victória Maziero",
      authorImg: "1616197630575.jfif",
    },
    "task-2": {
      id: "task-2",
      content: "Call the design agency to finalize mockups: 1:00pm today",
      author: "Willian Miranda",
      authorImg: "1517421713742.jfif",
    },
    "task-3": {
      id: "task-3",
      content: "Touch base with recruiters about new role: Tuesday",
      author: "Victória Maziero",
      authorImg: "1616197630575.jfif",
    },
    "task-4": {
      id: "task-4",
      content: "Meet with the engineering team: Thursday",
      author: "Júlia França ",
      authorImg: "1586463745239.jfif",
    },
    "task-5": {
      id: "task-5",
      content: "Charge my phone",
      author: "Victória Maziero",
      authorImg: "1616197630575.jfif",
    },
    "task-6": {
      id: "task-6",
      content: "Cook dinner",
      author: "Victória Maziero",
      authorImg: "1616197630575.jfif",
    },
    "task-7": {
      id: "task-7",
      content: "Be nice to my co-workers every day",
      author: "Victória Maziero",
      authorImg: "1616197630575.jfif",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TO DO",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "DOING",
      taskIds: ["task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "DONE",
      taskIds: ["task-5", "task-6"],
    },
    "column-4": {
      id: "column-4",
      title: "SUPER DONE",
      taskIds: ["task-7"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default cardData;
