import React from 'react';

import Link from 'next/link';

export default async function Navbar() {
  return (
    <div>
      <Link href={"/"}> Home</Link>
      <Link className="sub" href={"/login"}>
        Login
      </Link>
      <Link href={"/register"}>Sign Up</Link>
    </div>
  );
}
