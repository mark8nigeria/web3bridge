// components/UpdateItemForm.js
import React, { useState } from 'react';

const UpdateItemForm = ({ database, updateDatabase }) => {
  const [oldItem, setOldItem] = useState('');
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDatabase(oldItem, newItem);
    setOldItem('');
    setNewItem('');
  };

  return (
    <div>
      <h2>Update Database</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Existing Item" value={oldItem} onChange={(e) => setOldItem(e.target.value)} />
        <input type="text" placeholder="New Item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItemForm;
