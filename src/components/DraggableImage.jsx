import { Image } from "react-konva";
import useImage from "use-image";

export default function DraggableImage({ image, onDragEnd }) {
  const [img] = useImage(image.src);

  return (
    <Image
      width={77}
      height={100}
      image={img}
      x={image.x}
      y={image.y}
      draggable
      onDragEnd={(e) => onDragEnd(image.id, e.target.x(), e.target.y())}
    />
  );
}
