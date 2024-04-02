function SmallTimeBox({ count, timeName }) {
  return (
    <div className="w-[40px] h-[40px] rounded bg-amber-700/80 flex items-center justify-center text-gray-100">
      <div>
        <h3 className="font-bold text-sm">{count}</h3>
        <span className="block text-[10px] -mt-[4px]">{timeName}</span>
      </div>
    </div>
  );
}

export default SmallTimeBox;
