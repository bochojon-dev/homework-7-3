import React, { useState } from "react";
import "./CreateUser.css";
import { useDispatch } from "react-redux";
import { addToUsers } from "../../context/userSlice";

function CreateUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      id: new Date().getTime(),
      name,
      profession,
      age: +age,
      gender,
    };
    dispatch(addToUsers(newUser));
    setName("");
    setAge("");
    setGender("");
    setProfession("");
  };
  // const [data, setData] = useState({
  //   name: "",
  //   profession: "",
  //   age: "",
  //   gender: "",
  // });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };
  // console.log(data.name);
  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="create__user-form" action="">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          // onChange={handleChange}
          type="text"
          placeholder="name"
        />
        <input
          required
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          // onChange={handleChange}
          type="text"
          placeholder="profession"
        />
        <input
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          // onChange={handleChange}
          type="number"
          placeholder="age"
        />
        <select
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
