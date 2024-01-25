import DisplayTasks from '@/app/components/DisplayTasks.jsx';
import { fetchUser } from '@/app/lib/fetchUser.js';
import React from 'react';

export default async function UserTasks() {

  const user = await fetchUser();

  return (
    <>
      <div>
        <div>
          <DisplayTasks userId={userId} petId={petId}/>
        </div>
      </div>
    </>
  );
}
