import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "../common/ScrollToTop";
import { Toaster } from "../ui/sonner";

export const Layout = () => {
  return (
    <div className="bg-dmi-offwhite text-dmi-charcoal min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast:
              "bg-dmi-charcoal text-white border border-dmi-gold/30 rounded-md",
          },
        }}
      />
    </div>
  );
};
