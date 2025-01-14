import { Aside } from "../Aside/Aside";

export const Main = () => {

  return (
    <main className="flex flex-row flex-1 px-10">
      <section className="flex-1 flex flex-col relative top-10">
        {[...Array(5)].map((_, index) => (
          <h1 key={index}>Lastest Projects...</h1>
        ))}
      </section>
      <Aside />
    </main>
  );
};