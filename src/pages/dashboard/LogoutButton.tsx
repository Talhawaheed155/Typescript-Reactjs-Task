
import { useAuth } from "../../contexts/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={logout}
        className="w-48 rounded-lg border-2 border-red-1 bg-transparent text-red-1 px-2 py-1 cursor-pointer transition duration-300 hover:bg-red-1 hover:text-white font-bold mr-2 mb-2"
      >
        LOG OUT
      </button>
    </div>
  );
}
