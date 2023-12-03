import page from "./Pages/Pages";

export default function App() {
  const data = page;


  function ParagraphsFromArray({ dataArray }) {
    return (
      <div>
        {dataArray.map((item, index) => (
          <h2 key={index}>
            {index + 1}
            {item}
          </h2>
        ))}
      </div>
    );
  }

  return (
    <div id="app">
      <div className="surah">
        <button>الفاتحة</button>
        <button>البقرة</button>
        <button>آل عمران</button>
        <button>النساء</button>
        <button>المائدة</button>
        <button>الأنعام</button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div className="custom-Btn">
        <button className="button-1" role="button">
          Button 1
        </button>
        <button className="button-2" role="button">
          Button 2
        </button>
        <button className="button-3" role="button">
          Button 3
        </button>
        <button className="button-4" role="button">
          Button 4
        </button>
      </div>
      {/* <buttonages /> */}
      <div>
        <ParagraphsFromArray dataArray={data} />
      </div>
    </div>
  );
}
