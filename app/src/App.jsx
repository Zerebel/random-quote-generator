import { useEffect, useId, useRef, useState } from "react";

function App() {
  const total_pages = useRef(0);
  const [Quote, setQuote] = useState("Quote");
  const [Author, setAuthor] = useState("Author");
  const [QuoteGenre, setQuoteGenre] = useState("Age");
  const [currentPage, setCurrentPage] = useState(7212);
  const loadingIcon = useRef();

  const url = `https://quote-garden.onrender.com/api/v3/quotes?page=${currentPage}&limit=10`;

  useEffect(() => {
    const getQuotes = async () => {
      const data = await fetch(url);
      const info = await data.json();
      return info;
    };

    getQuotes().then((info) => {
      total_pages.current = info["pagination"]["totalPages"];
      const number = Math.floor(Math.random() * 10);
      setQuote(info["data"][number]["quoteText"]);
      setAuthor(info["data"][number]["quoteAuthor"]);
      setQuoteGenre(info["data"][number]["quoteGenre"]);
      // console.log(info);
    });
  }, [currentPage]);

  const handleRandomButton = () => {
    loadingIcon.current.classList.add("animate-spin");
    const nextPage = Math.floor(Math.random() * total_pages.current);
    setCurrentPage(nextPage);
    setTimeout(() => {
      loadingIcon.current.classList.remove("animate-spin");
    }, 1000);
    return;
  };
  return (
    <div className="font-raleway my-8 mx-6 md:mx-16 lg:mx-32 flex flex-col gap-24 justify-around select-none">
      <header className="font-raleway font-medium flex justify-end text-[#4F4F4F]">
        <div className="flex items-center gap-2">
          <button className="text-lg leading-5" onClick={handleRandomButton}>
            random
          </button>
          <i className="material-icons" ref={loadingIcon}>
            autorenew
          </i>
        </div>
      </header>
      <main className="flex my-8 flex-col gap-12 md:gap-28 lg:gap-32 lg:mx-80 md:mx-32">
        <div
          className={`border-l-[8px] pl-8 ${
            Quote === "Quote" ? " border-l-red-500" : "border-l-[#F7DF94]"
          }`}
        >
          <p className="pl-2 text-xl md:text-2xl lg:text-3xl">
            {Quote === "Quote" ? "loading..." : '"' + Quote + '"'}
          </p>
        </div>
        <div
          className="md:ml-8 px-4 py-8 flex justify-between items-center bg-black md:bg-inherit text-white md:text-inherit hover:bg-black hover:text-white cursor-pointer w-full"
          role={"button"}
          tabIndex="0"
          aria-label="Click me!"
        >
          <div className="flex flex-col">
            {Author === "Author" ? "loading..." : Author}
            <span className="text-[#828282]">
              {QuoteGenre === "Age" ? "" : QuoteGenre}
            </span>
          </div>
          <i className="material-symbols-outlined text-white">
            arrow_right_alt
          </i>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
