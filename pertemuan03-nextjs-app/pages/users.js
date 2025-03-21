import Link from "next/link";
import { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("api/users");
      const users = await response.json();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Daftar User:</h1>
      <ul>
        {users.map((user) => (
          <Link href="/user/[id]" as={`/user/${user.id}`}>
            <li key={user.id}>{user.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default UsersList;
