/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ handleAddFriends }) {
  const [friendName, setFriendName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName) return;

    const id = crypto.randomUUID();

    const newfriend = {
      id,
      name: friendName,
      image: `${imgUrl}?=${id}`,
      balance: 0,
    };

    handleAddFriends(newfriend);

    setFriendName("");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>Image url</label>
      <input
        type="text"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
