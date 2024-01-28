import Login from "@/app/components/Login";
import { fetchUser } from "@/app/lib/fetchUser.js";

export default async function SignUpPage() {
  let user = await fetchUser();
  return <Login user={user} />;
}
