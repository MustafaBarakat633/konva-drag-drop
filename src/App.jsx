import CanvasStage from "./components/CanvasStage";
import ItemMenu from "./components/ItemMenu";
import { useEffect, useRef, useState } from "react";

function App() {
  const [itemsOnStage, setItemsOnStage] = useState([]);

  const handleAddItem = (src) => {
    setItemsOnStage((prev) => [
      ...prev,
      { src, x: 100, y: 100, id: Date.now() },
    ]);
  };

  const containerRef = useRef(null);
  const [stageWidth, setStageWidth] = useState(0);

  useEffect(() => {
    // update stage width on mount
    const updateWidth = () => {
      if (containerRef.current) {
        setStageWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    // update on window resize
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="container mx-auto mt-8" ref={containerRef}>
      <CanvasStage
        items={itemsOnStage}
        setItems={setItemsOnStage}
        stageWidth={stageWidth}
      />
      <ItemMenu onSelect={handleAddItem} />
    </div>
  );
}

export default App;
