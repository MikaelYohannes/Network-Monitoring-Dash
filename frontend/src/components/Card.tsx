interface CardProp {
  name: string;
  value: number;
}

export default function Card(props: CardProp) {
  return (
    <div className="flex flex-col justify-around min-h-20 min-w-70 h-50 border border-orange-400 rounded-lg mx-10 p-8 my-5  bg-[#020820]">
      <h2 className="">{props.name}</h2>
      <p className="">{props.value}</p>
    </div>
  );
}
