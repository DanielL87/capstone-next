import SignUp from "@/app/components/SignUp.jsx";
import { fetchUser } from "@/app/lib/fetchUser.js";

export default async function SignUpPage() {
  let user = await fetchUser();
  return <SignUp user={user} />;
}
