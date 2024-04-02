function Loading({ awal = false }) {
  return awal ? (
    <div className="flex items-center justify-center bg-amber-50 max-w-[428px] w-full h-[100vh] overflow-hidden fixed top-0 left-1/2 -translate-x-1/2 z-[60]">
      <div className="text-center">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text-xs mt-2 font-semibold text-gray-500 tracking-tighter">
          Tunggu Sebentar yaa...
        </p>
      </div>
    </div>
  ) : (
    <div className="lds-ring-custom">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
