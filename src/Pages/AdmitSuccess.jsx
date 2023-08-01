import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const AdmitSuccess = () => {
  const { user, loading } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedback = {
      name,
      rating,
      text,
    };
    console.log(feedback);

    fetch("https://server-peach-eta.vercel.app/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "",
            text: "Feedback Successfully!",
            icon: "success",
            confirmButtonColor: "#05b6d1",
            confirmButtonText: "Added",
          });
        }
      });
  };

  return (
    <div className="max-w-[840px] mx-auto my-14 bg-gray-200 rounded-lg">
      <div className="block p-8 mx-auto border">
        <h1 className="my-4 text-3xl font-bold text-center">
          Add Your Feedback
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 my-4 rounded-md"
            type="text"
            name="name"
            placeholder="Name"
          />{" "}
          <br />
          <input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-3 my-4 rounded-md"
            type="text"
            name="rating"
            placeholder="Rating"
          />{" "}
          <br />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-md"
            name=""
            id=""
            cols="10"
            rows="5"
          ></textarea>{" "}
          <br />
          <input
            className="w-full mt-2 btn btn-primary"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default AdmitSuccess;
