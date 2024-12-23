import Link from "next/link";
import type { FC } from "react";

import { APP_ROUTES } from "@/shared/config/app-routes";
import { Button } from "@/shared/ui/Button";

export const HomePage: FC = () => {
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
};
