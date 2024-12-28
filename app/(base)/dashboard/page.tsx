import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stude | Dashboard",
  description: "Stude Home Page",
};

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
}
