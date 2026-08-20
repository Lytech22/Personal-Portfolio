import { Hero, Navbar, StackRow, SupportingSections } from "./components/portfolio-ui";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <StackRow />
        <SupportingSections />
      </main>
    </div>
  );
}
