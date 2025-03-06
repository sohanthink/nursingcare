import Logout from "@/components/auth/Logout";

export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <h1 className=" text-white">Welcome Admin</h1>
      <p className="text-2xl text-white">
        Start day with managing new appointments
      </p>
      <Logout />
    </div>
  );
}
