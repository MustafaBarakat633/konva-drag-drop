const sampleItems = [];

for (let i = 1; i < 18; i++) sampleItems.push(`./items/item-${i}.jpg`);
console.log(sampleItems);

export default function ItemMenu({ onSelect }) {
  return (
    <div className="bg-gray-300 flex overflow-auto p-4 gap-4">
      {sampleItems.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          style={{
            height: "100px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={() => onSelect(src)}
        />
      ))}
    </div>
  );
}
