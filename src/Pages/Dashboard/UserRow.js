import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://arcane-sierra-72100.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error('Failed to Make an admin');
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== 'admin' && (
          <button onClick={makeAdmin} class='btn btn-xs btn-primary'>
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
