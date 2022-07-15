import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

const register = () => {
  const handaleSubmit = (e) => {
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const date = new Date();
    const getDate = date.toUTCString();
    const data = {
      name: name,
      email: email,
      password: password,
      date: getDate,
    };

    console.log(data);
    e.preventDefault();
  };

  return (
    <div>
        <Navbar/>
      <section className=" mb-10">
        <div className="mt-6">
          <div className="card max-w-lg mx-auto bg-base-100 shadow border border-slate-200">
            <h1 className=" text-xl text-secondary font-bold m-4">
              Join Our Todo Community! Create a New Account.
            </h1>
            <div className="card-body pt-0">
              <form onSubmit={handaleSubmit}>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Your Name:</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Your Email:</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Your Password:</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </div>
                <h2 className=" my-2">
                  Already Have an Account?{" "}
                  <span className=" text-error">
                    <Link href="\login">Login</Link>
                  </span>{" "}
                </h2>
                <div>
                  <input
                    type="submit"
                    value="Register"
                    className="input btn btn-secondary mt-3 w-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default register;
