function Loading() {
    return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center transition-opacity duration-300 opacity-100'}`}
    >
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
}

export default Loading;
