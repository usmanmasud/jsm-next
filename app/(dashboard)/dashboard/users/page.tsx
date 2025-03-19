import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>users</div>
      <Link href="/dashboard/users/1">User 1</Link>
      <Link href="/dashboard/users/2">User 2</Link>
      <Link href="/dashboard/users/3">User 3</Link>
    </>
  );
};

export default page;
