// Write your code here:
export default function UsersList(props) {
  return (
    <ul>
      {props.users.map((data) => {
        return (
          <li>
            {data.name} {data.age} years old
          </li>
        );
      })}
    </ul>
  );
}
