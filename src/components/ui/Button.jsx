export default function Button({ title, icon }) {
  return (
    <button className="bg-black text-white text-xl hover:bg-black/90 flex gap-4 items-center font-poppins font-medium py-2 px-4 rounded-xl">
      {icon &&<img src={icon} alt={title} className="h-12" />}
      <span>{title}</span>
    </button>
  );
}
