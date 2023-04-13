const ListLetter = ({ number, receiver, title, text, setShowMassage }) => {
  return (
    <div className="grid grid-cols-12 gap-2 mb-3 justify-center items-center h-5 py-1">
      <span className="col-span-1">{number + 1}</span>
      <span className="col-span-2 truncate">{receiver} </span>
      <span className="col-span-3 max-w-max truncate">{title} </span>
      <span className="col-span-4 max-w-max h-5 truncate">{text}</span>
      <button
        onClick={() => setShowMassage(number + 1)}
        className="bg-[#003b7e29] col-span-2 self-end p-1 rounded-sm text-lg text-[#003B7E]"
      >
        مشاهده
      </button>
    </div>
  );
};

export default ListLetter;
