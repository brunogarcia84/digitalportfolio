import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Right from "./components/Right";

export default function Home() {
  return (
    <>
      <section>
        <Right />
        <Experience />
        <Education />
      </section>
    </>
  );
}
