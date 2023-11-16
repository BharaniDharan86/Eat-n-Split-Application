/* eslint-disable react/prop-types */
import Friend from "./Friend";
function FriendList({ friends, handleSelectedFriend, selectedFriend }) {
  return (
    <>
      <ul>
        {friends.map((friend) => {
          return (
            <Friend
              friend={friend}
              key={friend.id}
              handleSelectedFriend={handleSelectedFriend}
              selectedFriend={selectedFriend}
            />
          );
        })}
      </ul>
    </>
  );
}

export default FriendList;
