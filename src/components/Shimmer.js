const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center" data-testid="shimmer">
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="h-72 w-60 p-2 m-4 bg-gray-300 "
            ></div>
          ))}
      </div>
    </>
  );
};
export default Shimmer;
