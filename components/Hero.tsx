export default function Hero() {
  return (
    <section className="hero bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat min-h-[60vh] p-6 flex w-full">
      <header className="flex flex-col items-center justify-center gap-2 text-center flex-1 mt-12">
        <h1 className="text-3xl">Wow look at this h1</h1>
        <h2 className="text-2xl">
          Now you&apos;re reading this h2 which is a bit smaller but also has a
          bunch of text, crazy right?
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            One button
          </button>{" "}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Then another
          </button>
        </div>
      </header>
    </section>
  );
}
