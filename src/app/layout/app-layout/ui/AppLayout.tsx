import type { FC, PropsWithChildren } from "react";

import { Header } from "./Header";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid size-full">
      <Header />
      <main className="size-full overflow-y-auto px-4 py-8 540:px-6 1024:px-8">
        {children}
      </main>
    </div>
  );
};
