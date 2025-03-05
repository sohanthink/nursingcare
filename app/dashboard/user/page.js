import Logout from "@/components/auth/Logout";

export default function Dashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <p className="text-red-600 text-2xl">
        Welcome to the User dashboard page
      </p>
      <Logout />
    </div>
  );
}
