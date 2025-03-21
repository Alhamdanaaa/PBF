import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const UserProfile = ({ user }) => {
  const router = useRouter();
  return (
    <div>
      <h1>User Profile</h1>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Email: {user.phone}</p>
      <p>Email: {user.website}</p>
      <Link href="/users">Kembali ke daftar user</Link>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return {
    props: {
      user
    },
  };
}

export default UserProfile;
