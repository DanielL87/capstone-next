import { fetchUser } from "../../lib/fetchUser";
import Store from "@/app/components/Store.jsx";
export default async function StorePage() {
  const user = await fetchUser();

  return (
    <>
      <Store user={user} />
    </>
  );
}
