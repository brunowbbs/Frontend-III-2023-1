import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

export default function UserDetailsPage(props: any) {
  const { user } = props;

  return (
    <div>
      <h1>Hello Users </h1>
      {JSON.stringify(user)}
    </div>
  );
}

type Params = {
  id: string;
} & ParsedUrlQuery;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const user = await response.json();

  if (user?.id) {
    return {
      notFound?true
      // redirect: {
      //   destination: "/",
      //   permanent: false,
      // },
    };
  }

  return {
    props: { user }, // will be passed to the page component as props
  };
};
