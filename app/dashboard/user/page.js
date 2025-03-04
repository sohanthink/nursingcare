import Logout from "@/components/auth/Logout";
import ProtectedRoute from "@/components/ProtectedRoute";
import Image from "next/image";

export default function Dashboard() {
  return (
    <ProtectedRoute allowedRoles={["user", "admin"]}>
      <div>
        <h1>User Dashboard</h1>
        <p className="text-red-600 text-2xl">
          Welcome to the User dashboard page
        </p>
        <Logout />
      </div>
    </ProtectedRoute>
  );
}
