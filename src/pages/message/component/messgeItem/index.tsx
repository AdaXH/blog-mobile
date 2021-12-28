import React from 'react';
import { Message } from '../../types';

export const MessageItem: React.FC<{ data: Message }> = ({ data }) => {
  return (
    <div>
      <div>{data.content}</div>
    </div>
  );
};
