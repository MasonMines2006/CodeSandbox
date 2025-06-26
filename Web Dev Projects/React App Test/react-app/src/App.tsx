import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import apiClient, { CanceledError } from "./services/api-client";
import { isCancel } from "axios";
import UserService, { type User } from "./services/userService";
import userService from "./services/userService";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("Fetching users...");

    const { request, cancel } = userService
      .getAllUsers()
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error: any) => {
        if (isCancel(error)) return;
        else setError(error.message || "An error occurred");
        setLoading(false);
      });
    // .finally(() => {
    //   setLoading(false);
    // })
    // DOESNT WORK IN STRIC MODE?

    return () => {
      controller.abort();
    };
  }, []);
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    apiClient.delete(`/users/${user.id}`).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };
  const addUser = () => {
    const newUser = { id: 0, name: "New User" };
    const originalUsers = [...users];
    setUsers([...users, newUser]);

    apiClient
      .post<User>("/users/", newUser)
      .then((response) => {
        setUsers([response.data, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                onClick={() => deleteUser(user)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
