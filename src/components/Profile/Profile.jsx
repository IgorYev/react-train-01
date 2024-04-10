import css from "./Profile.module.css";

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers: </span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
