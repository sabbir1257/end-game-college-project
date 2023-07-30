import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const AdmitForm = () => {
  const { user, loading } = useContext(AuthContext);


  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const myCollege = {
      image,
      name,
      email: user.email,
      subject,
      phone,
      dateOfBirth,
      address,
    };
    console.log(myCollege);

    fetch("https://server-peach-eta.vercel.app/myCollege", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myCollege),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "",
            text: "Added College Successfully!",
            icon: "success",
            confirmButtonColor: "#05b6d1",
            confirmButtonText: "Added",
          });
        }
      });
  };

  return (
    <div className="">
      <h1 className="my-3 text-5xl text-center">Admit Form</h1>
      <div className="px-8 py-4 max-w-[500px] my-10 mx-auto bg-[#f2f2f2] rounded-md">
        <form onSubmit={handleSubmit}>
          <label className="font-semibold">Name</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-2 border rounded-md text-slate-500"
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
          <br />
          <label className="font-semibold">Email</label>
          <br />
          <input
            readOnly
            value={user && user?.email}
            className="w-full p-3 mb-2 border rounded-md"
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
          />
          <br />
          <label className="font-semibold">Subject</label>
          <br />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 mb-2 border rounded-md"
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
          />
          <br />
          <label className="font-semibold">Phone No.</label>
          <br />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 mb-2 border rounded-md"
            type="number"
            name="phone"
            id=""
            placeholder="Phone Number"
          />
          <br />
          <label className="font-semibold">Date of Birth</label>
          <br />
          <input
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full p-3 mb-2 border rounded-md"
            type="date"
            name="dateOfBirth"
            id=""
            placeholder="Date of Birth"
          />
          <br />
          <label className="font-semibold">Address</label>
          <br />
          <input
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 mb-2 border rounded-md"
            type="text"
            name="address"
            placeholder="Enter Your Address"
          />
          <br />
          <label className="font-semibold">Image URL</label>
          <br />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 mb-3 border rounded-md"
            type="text"
            name="image"
            alt=""
            placeholder="Enter Photo URL"
          />
          <br />
          <input
            className="w-full btn-primary btn "
            type="submit"
            value="Submit"
          />
          <br />
        </form>
      </div>
    </div>
  );
};

export default AdmitForm;
