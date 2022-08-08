import React, { useState } from 'react';
import profile from '../assets/profile.png';
import Edit from './Editmodal.jsx';

export default function Fotoprofile() {
  const [showEdit, setShowEdit] = useState(false);
  const handleOnClose = () => setShowEdit(false);
  return (
    <div>
      <button onClick={() => setShowEdit(true)}>
        <img src={profile} alt="/" />
      </button>
      <Edit onClose={handleOnClose} visible={showEdit} />
    </div>
  );
}
