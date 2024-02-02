import Appbar from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard() {
  return (
    <div>
      <Appbar />
      <div className="p-7">
        <Balance value={100} />
        <Users />
      </div>
    </div>
  );
}
