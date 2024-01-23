'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../lib/redux/hooks';
import { updatePrintName } from '../lib/redux/slice/counterSlice';
import { updateUser } from '../lib/redux/slice/userSlice';
import { useGetPostsQuery } from '../api/services/postApi';
import { updateFakeUser } from '../lib/redux/slice/userSlicefake';

type Props = {};

const TestReduxName = (props: Props) => {
  const { printName } = useAppSelector((state) => state.counter);
  const { id, firstName, lastName } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetPostsQuery({});
  

  console.log('Received data using rtk: ', data);

  return (
    <div>
      <button
        className="rounded-sm bg-blue-500 p-2 "
        onClick={() => dispatch(updatePrintName('Talal Mahmud'))}
      >
        Update Name
      </button>
      <p>Current Name: {printName}</p>

      <div>
        <h1>User slice test</h1>
        <p>id: {id}</p>
        <p>first name: {firstName}</p>
        <p>last Name: {lastName}</p>

        <button
          className="rounded-sm bg-blue-500 p-2 "
          onClick={() =>
            dispatch(
              updateUser({
                userId: 1,
                firstName: 'Sabbir',
                lastName: 'hossain',
              }),
            )
          }
        >
          Update User
        </button>
      </div>
    </div>
  );
};

export default TestReduxName;
