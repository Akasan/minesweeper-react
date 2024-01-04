import { useState } from "react";
import "./App.css";
import { NothingCell, BombCell } from "./components/cell";

const COL = 20;
const ROW = 10;

function App() {
  let m = new Array();
  for (let i = 0; i < COL; i++) {
    m.push(new Array(ROW).fill(false));
  }
  const [map, setMap] = useState(m);
  const onUpdateCell = (col: number, row: number) => {
    const m = [...map];
    m[col][row] = !m[col][row];
    setMap(m);
  };

  const cells = () => {
    let items = [];
    for (let c = 0; c < COL; c++) {
      for (let r = 0; r < ROW; r++) {
        items.push(
          <NothingCell
            neighborBombNum={c + r}
            isOpened={map[c][r]}
            onClick={() => {
              onUpdateCell(c, r);
            }}
          />,
        );
      }
    }
    return items;
  };

  return (
    <div className="App" style={{ padding: "40px" }}>
      {cells()}
    </div>
  );
}

export default App;
