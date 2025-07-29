import React from 'react'
import { useRouteError } from 'react-router';

export default function Error() {
  const error = useRouteError();
  console.log(error.status);
  return (
    <div>Something went wrong.{error.status}</div>
  )
}
