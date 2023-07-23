import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dragdrop from "./Dragdrop";

function Sticker() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="sticker_box">
        <Dragdrop />
      </div>
    </DndProvider>
  );
}

export default Sticker;
