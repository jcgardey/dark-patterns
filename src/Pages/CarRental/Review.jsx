const Input = () => (
  <input className="w-full h-10 border border-blue-800 rounded" type="text" />
);

export const Review = ({}) => {
  return (
    <div className="w-4/5 mx-auto py-4">
      <h2 className="text-2xl text-black font-semibold">Review and book</h2>
      <div className="my-6 w-1/3">
        <h4 className="text-xl">Driver details</h4>
        <div className="my-4">
          <div className="my-3">
            <label className="">Name</label>
            <Input />
          </div>
          <div className="my-3">
            <label>Email</label>
            <Input />
          </div>
        </div>
      </div>
      <div className="my-12">
        <h4 className="text-xl">Payment method</h4>
        <div className="flex my-2">
          <div className="mr-2">
            <label>Card number</label>
            <Input />
          </div>
          <div className="mr-8">
            <label>Cardholder name</label>
            <Input />
          </div>
          <div className="mr-2 w-1/12">
            <label>Month</label>
            <Input />
          </div>
          <div className="mr-2 w-1/12">
            <label>Year</label>
            <Input />
          </div>
          <div className="mr-2 w-1/12">
            <label>CVV</label>
            <Input />
          </div>
        </div>
      </div>
      <button className="w-1/4 bg-blue-800 text-white text-xl rounded p-2">
        Pay and book
      </button>
    </div>
  );
};

