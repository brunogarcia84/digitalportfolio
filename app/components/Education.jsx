export default function Education() {
  return (
    <>
      <section id="education" className="max-w-7xl m-auto">
        <h2 className="inline-block border-b-2 border-[#b87333]">Education</h2>
        <div className="grid grid-cols-2 gap-10">
          <article className="mt-5 mb-5">
            <span className="experienceDate">July/2021</span>
            <h3>Cambridge TKT Certification</h3>
            <p>Cambridge University</p>
          </article>

          <article className="mt-5 mb-5">
            <span className="experienceDate">August/2018</span>
            <h3>TEFL Certification</h3>
            <p>Open International University</p>
          </article>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <article className="mt-5 mb-5">
            <span className="experienceDate">July/2018</span>
            <h3>T.I.E. Certification</h3>
            <p>Dublin School of Advanced Studies</p>
          </article>

          <article className="mt-5 mb-5">
            <span className="experienceDate">December/2014</span>
            <h3>Bachelor's Degree in Law</h3>
            <p>Anhembi Morumbi University</p>
          </article>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <article className="mt-5 mb-5">
            <span className="experienceDate">December/2004</span>
            <h3>Degree in Music (Guitar)</h3>
            <p>Guitar Institute of Technology</p>
          </article>

          <article className="mt-5 mb-5">
            <span className="experienceDate">April/2003</span>
            <h3>200h of Advanced English</h3>
            <p>Brazil-United States Cultural Centre</p>
          </article>
        </div>

        <h2 id="languages" className="inline-block border-b-2 border-[#b87333]">
          Languages
        </h2>

        <div className="grid grid-cols-2 gap-10">
          <article className="mt-5 mb-5">
            <span className="experienceDate">Native</span>
            <h3>Portuguese</h3>
          </article>

          <article className="mt-5 mb-5">
            <span className="experienceDate">Fluent - C1</span>
            <h3>English</h3>
          </article>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <article className="mt-5 mb-5">
            <span className="experienceDate">
              Basic to Intermediary - A2-B1
            </span>
            <h3>Spanish</h3>
          </article>

          <article className="mt-5 mb-5">
            <span className="experienceDate">Beginner - A1</span>
            <h3>Ukranian</h3>
          </article>
        </div>
      </section>
    </>
  );
}
