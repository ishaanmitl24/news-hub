import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem("token"); // Example check

      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [router]);

    const isAuthenticated = localStorage.getItem("token"); // Example check

    if (!isAuthenticated) {
      return null; // Or render a loading spinner, etc.
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
