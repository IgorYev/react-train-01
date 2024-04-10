import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import ClickCounter from "./components/Button/Button";

import user from "../src/data/userData.json";
import friends from "../src/data/friends.json";
import transactions from "../src/data/transaction.json";

export default function App() {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <ClickCounter />
    </div>
  );
}
