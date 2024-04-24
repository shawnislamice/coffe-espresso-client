const AddCoffe = () => {
  return (
    <div className="relative md:mt-14">
      <form className="container mx-auto max-w-screen-xl bg-[#F4F3F0] md:p-8 md:space-y-4  ">
        <h2 className="font-rancho text-3xl text-center font-bold">
          Add New Coffe
        </h2>
        <p className="text-center max-w-2xl mx-auto my-4">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <div className="flex justify-between gap-4">
          <div className="w-full space-y-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input w-full"
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="">Chef</label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="input w-full"
            />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="w-full space-y-2">
            <label htmlFor="">Supplier</label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee spplier"
              className="input w-full"
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="">Taste</label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input w-full"
            />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="w-full space-y-2">
            <label htmlFor="">Details</label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input w-full"
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input w-full"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="">Photo</label>
          <input
            type="text"
            placeholder="Enter photo"
            name="photo"
            className="input w-full"
          />
        </div>
        <button type="submit" className="btn w-full bg-[#D2B48C] md:my-3">Add Coffe</button>
      </form>
    </div>
  );
};

export default AddCoffe;
