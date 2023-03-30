import { useEffect, useRef, useState } from "react";

function App() {
  const [Quote, setQuote] = useState("Quote");
  const [Author, setAuthor] = useState("Author");
  const [QuoteGenre, setQuoteGenre] = useState("Age");
  const [currentPage, setCurrentPage] = useState(
    Math.floor(Math.random() * 7000)
  );
  const [currentView, setCurrentView] = useState(0);
  const [AllAuthurQuotes, setAllAuthurQuotes] = useState([]);
  const total_pages = useRef(0);
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

  const handleSwitchView = () => {
    currentView === 0 ? setCurrentView(1) : setCurrentView(0);
    getAurthorQuotes();
  };

  const getAurthorQuotes = () => {
    const new_url = `https://quote-garden.onrender.com/api/v3/quotes?author=${Author}`;
    const getQuotes = async () => {
      const data = await fetch(new_url);
      const info = await data.json();
      return info;
    };

    getQuotes().then((res) => {
      const CreateList = () => res["data"];
      return setAllAuthurQuotes(CreateList());
    });
  };

  return (
    <div className="font-raleway my-8 mx-6 md:mx-16 lg:mx-32 flex flex-col gap-24 justify-around select-none">
      <header className="font-raleway font-medium flex justify-end text-[#4F4F4F]">
        <div className="flex items-center gap-2">
          <button
            className={`text-lg leading-5 hover:font-semibold ${
              currentView === 0 ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={
              currentView === 0
                ? handleRandomButton
                : () => {
                    return;
                  }
            }
          >
            random
          </button>
          <i className="material-icons" ref={loadingIcon}>
            autorenew
          </i>
        </div>
      </header>
      <main className="flex my-8 flex-col gap-8 md:gap-28 lg:gap-32 lg:mx-72 md:mx-32">
        {currentView === 0 ? (
          <>
            <div
              className={`border-l-[8px] pl-8 ${
                Quote === "Quote" ? " border-l-red-500" : "border-l-[#F7DF94]"
              }`}
            >
              <p className="pl-2 text-xl md:text-2xl lg:text-3xl font-medium">
                {Quote === "Quote" ? "loading..." : '"' + Quote + '"'}
              </p>
            </div>
            <div
              className="md:ml-8 px-4 py-8 flex justify-between items-center bg-black md:bg-inherit text-white md:text-inherit hover:bg-black hover:text-white cursor-pointer w-full group"
              role={"button"}
              tabIndex="0"
              aria-label="Click me!"
              onClick={handleSwitchView}
            >
              <div className="flex flex-col md:text-2xl text-base font-bold">
                {Author === "Author" ? "loading..." : Author}
                <span className="text-[#828282] font-medium text-sm">
                  {QuoteGenre === "Age" ? "" : QuoteGenre}
                </span>
              </div>
              <i className="material-symbols-outlined text-white group-focus:translate-x-4 pr-2">
                arrow_right_alt
              </i>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-12">
            <p className="pl-12 text-[#333333] md:text-2xl text-base font-bold">
              {Author}
            </p>
            <ul className="flex flex-col gap-12 pl-2 text-xl md:text-2xl lg:text-3xl h-72 font-medium overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-scroll scrollbar">
              {AllAuthurQuotes != undefined
                ? AllAuthurQuotes.map((a) => (
                    <li
                      key={a["_id"]}
                      className="border-l-[8px] pl-8 border-l-[#F7DF94] snap-start scroll-mt-4"
                    >
                      {a["quoteText"]}
                    </li>
                  ))
                : null}
            </ul>
            <div>
              <button
                className="inline-flex gap-2 hover:bg-black group hover:text-white py-4 w-full px-6"
                onClick={handleSwitchView}
              >
                <i className="material-symbols-outlined invisible group-hover:visible group-focus:-translate-x-4">
                  keyboard_backspace
                </i>
                Back
              </button>
            </div>
          </div>
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
