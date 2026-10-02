import { getInitials } from "../user/userStorage";

function Avatar({ user, size = "small" }) {
  if (user.avatarUrl) {
    return (
      <img
        className={`avatar avatar-${size}`}
        src={user.avatarUrl}
        alt={`Avatar de ${user.name}`}
      />
    );
  }

  return (
    <span className={`avatar avatar-${size}`} aria-hidden="true">
      {getInitials(user.name)}
    </span>
  );
}

export default Avatar;
