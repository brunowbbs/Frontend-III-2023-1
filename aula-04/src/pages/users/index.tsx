import Link from "next/link";

export default function UsersPage(props: any) {
  const { users } = props;

  // const name = "WEsley";

  return (
    <div>
      <h1>Hello Users Page </h1>
      <ul>
        {users.map((user: any) => (
          <Link key={user.id} href={"/users/" + user.id}>
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users: users,
    },
  };
};
