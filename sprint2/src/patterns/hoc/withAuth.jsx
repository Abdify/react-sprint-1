// const arr = [1, 2, 3, 4, 5];

import { useEffect, useState } from "react";

// const filterFunc = (item) => item % 2 === 0;

// const even = arr.filter(filterFunc);

const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch("/user")
        .then((res) => res.json())
        .then((data) => {
          if (!data.isAuthenticated) {
            router.push("/login");
          } else {
            setUser(data);
          }
        });
    }, []);

    if (user) {
      return <Component />;
    }

    return null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
