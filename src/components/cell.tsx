import styles from "./cell.module.css";
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
  const { onClick, text, isOpened } = props;
  return (
    <div className={`${styles.cell} ${styles.nothing_cell}`} onClick={onClick}>
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
