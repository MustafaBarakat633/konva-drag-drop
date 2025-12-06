import { Stage, Layer, Image as KonvaImage } from "react-konva";
import DraggableImage from "./DraggableImage";
import useImage from "use-image";

export default function CanvasStage({ items, setItems, stageWidth }) {
  const [wallImg] = useImage("/wall.jpg");

  const updatePosition = (id, x, y) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, x, y } : item))
    );
  };

  return (
    <Stage
      width={stageWidth}
      height={500}
      className="bg-[url('/wall.jpg')] bg-cover"
    >
      <Layer>
        <KonvaImage image={wallImg} width={stageWidth} height={500} />
        {items.map((item) => (
          <DraggableImage
            key={item.id}
            image={item}
            onDragEnd={updatePosition}
          />
        ))}
      </Layer>
    </Stage>
  );
}
