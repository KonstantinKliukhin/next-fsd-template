import { getCurrentUser } from "@/entities/user";

export default async function Page() {
  const user = await getCurrentUser();

  return <div>{JSON.stringify(user || {})}</div>;
}
