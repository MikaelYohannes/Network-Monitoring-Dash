interface CardProp {
  name: string;
  value: string;
}

export default function Card(props: CardProp) {
  return (
    <div className="flex flex-col justify-around min-h-20 min-w-70 h-50 border rounded-lg mx-15 p-10  bg-[#020820]">
      <h2 className="">{props.name}</h2>
      <p className="">{props.value}</p>
    </div>
  );
}
