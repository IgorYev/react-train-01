import css from "./FriendList.module.css";
import clsx from "clsx";

export default function FrinedListItem({ friend: { name, avatar, isOnline } }) {
  return (
    <div className={css.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.text, isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Onine" : "Offline"}
      </p>
    </div>
  );
}
