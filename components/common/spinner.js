const Spinner = ({ size = 8 }) => {
  const style =
    size == 5
      ? "h-5 w-5 border-[3px]"
      : size == 8
      ? "h-8 w-8 border-[4px]"
      : "h-12 w-12 border-[5px]";

  return (
    <div
      className={`${style} inline-block  animate-spin rounded-full border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default Spinner;
