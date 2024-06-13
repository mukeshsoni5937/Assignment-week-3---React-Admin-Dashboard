import React from 'react';
import Board from 'react-trello';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      cards: [
        { id: 'Card1', title: 'Card 1', description: 'Card details' },
        { id: 'Card2', title: 'Card 2', description: 'Card details' },
      ],
    },
    {
      id: 'lane2',
      title: 'In Progress',
      cards: [
        { id: 'Card3', title: 'Card 3', description: 'Card details' },
      ],
    },
    {
      id: 'lane3',
      title: 'Completed',
      cards: [
        { id: 'Card4', title: 'Card 4', description: 'Card details' },
      ],
    },
  ],
};

const KanbanBoard = () => {
  return <Board data={data} />;
};

export default KanbanBoard;
