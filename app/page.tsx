import Link from "next/link";

import { APP_ROUTES } from "@/shared/config/app-routes";
import { Button } from "@/shared/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Button className="mt-4">
        <Link href={APP_ROUTES.SIGN_UP}>Sign up</Link>
      </Button>
      <Button className="mt-4">
        <Link href={APP_ROUTES.SIGN_IN}>Sign in</Link>
      </Button>
      <Button className="mt-4">
        <Link href={APP_ROUTES.DASHBOARD}>Dashboard</Link>
      </Button>
    </main>
  );
}
