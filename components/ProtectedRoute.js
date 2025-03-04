"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../store/authStore";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, token, loadUser } = useAuthStore();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser(); // Ensure user data is loaded from localStorage
  }, []);

  useEffect(() => {
    if (token === null) {
      console.log("🚨 No token found, redirecting to login.");
      router.push("/");
    } else if (allowedRoles && !allowedRoles.includes(user?.role)) {
      console.log("🚨 Unauthorized role, redirecting.");
      router.push("/unauthorized");
    } else {
      setLoading(false);
    }
  }, [user, token, router, allowedRoles]);

  if (loading) return <p>Loading...</p>;

  return children;
};

export default ProtectedRoute;
