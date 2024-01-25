import DisplayTasks from '@/app/components/DisplayTasks.jsx';
import React from 'react';

export default async function UserTasks() {

  

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
