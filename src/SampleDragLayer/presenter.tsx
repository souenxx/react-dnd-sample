import { NONAME } from "dns";
import { FC } from "react";
import { useSampleDragLayer } from "./hooks";

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};

type Props = {
  text: string;
  x: number;
  y: number;
};

export const SampleDragLayerPresenter: FC<Props> = ({ text, x, y }) => {
  return (
    <div
      style={{
        width: 400,
        zIndex: 10,
        position: "absolute",
        top: 0,
        left: 0,
        transform: `translate(${x}px, ${y}px)`,
        pointerEvents: "none",
      }}
    >
      <div style={{ zIndex: 10, ...style }}>{text}</div>
    </div>
  );
};
