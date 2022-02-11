import React, { useEffect, useState } from "react";

export const UserView = () => {
  const [user, setUser] = useState<{ id: number; name: string; age: number }>();

  useEffect(() => {
    fetch("http://localhost:8080/map")
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      });
  }, []);

  return (
    <div>
      {!user ? (
        <div>Loading...</div>
      ) : (
        <div>
          {user.id}
          <br />
          {user.name}
          <br />
          {user.age}
        </div>
      )}
    </div>
  );
};
