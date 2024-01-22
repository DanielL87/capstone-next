import SelectPet from "@/app/components/SelectPet.jsx";
import { fetchUser } from "@/app/lib/fetchUser.js";
import { userAgent } from "next/server.js";

export default async function SelectPetPage() {
  const user = await fetchUser();
  return <SelectPet user={user} />;
}
