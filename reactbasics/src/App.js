import FirstParagraph from "./Components/FirstParagraph";

function App() {
  var data = [
    {
      content: "Aditya",
      number: 1,
    },
    {
      content: "Details Paeg",
      number: 2,
    },
    {
      content: "sfafdf",
      number: 3,
    },
  ];

  return (
    <div>
      {data.map((singleObject) => {
        return (
          <FirstParagraph
            content={singleObject.content}
            number={singleObject.number}
          />
        );
      })}
    </div>
  );
}
export default App;
