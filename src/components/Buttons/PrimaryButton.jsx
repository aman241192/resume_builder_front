const PrimaryButton = ({ type = "primary", text = "OK", onClick }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="w-full cursor-pointer bg-green-600 p-2 rounded-lg text-white font-medium hover:bg-green-700"
      >
        {text}
      </button>
    </>
  );
};

export default PrimaryButton;
