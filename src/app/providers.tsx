"use client";
import NavigationProvider from "@/providers/navigation-provider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <NavigationProvider>
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </NavigationProvider>
  );
}
