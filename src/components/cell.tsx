enum CellType {
  NOTHING = 0,
  BOMB = 1,
}

type NothingCellProps = {
  onClick: () => void;
  neighborBombNum: number;
  isOpened: boolean;
};
type BombCellProps = {
  onClick: () => void;
  isOpened: boolean;
};
type CellProps = {
  onClick: () => void;
  cellType: CellType;
  isOpened: boolean;
  text: string;
};

const Cell = (props: CellProps) => {
  const { onClick, text, isOpened, cellType } = props;
  const backgroundColor = cellType === CellType.NOTHING ? "gray" : "red";
  return (
    <div
      className="cell"
      style={{
        backgroundColor: backgroundColor,
        fontSize: "16px",
        width: "30px",
        height: "30px",
        float: "left",
        border: "1px solid black",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      <p>{isOpened ? text : ""}</p>
    </div>
  );
};

export const NothingCell = (props: NothingCellProps) => {
  const { onClick, neighborBombNum, isOpened } = props;
  return (
    <Cell
      text={String(neighborBombNum)}
      isOpened={isOpened}
      cellType={CellType.NOTHING}
      onClick={onClick}
    />
  );
};

export const BombCell = (props: BombCellProps) => {
  const { onClick, isOpened } = props;
  return (
    <Cell
      text={"B"}
      isOpened={isOpened}
      cellType={CellType.BOMB}
      onClick={onClick}
    />
  );
};
