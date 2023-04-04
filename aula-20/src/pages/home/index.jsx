import { useEffect } from "react";
import Layout from "../../layout";
import api from "../../services/api";

export default function HomePage() {
  async function getTimes() {
    try {
      const response = await api.get("/teams", {
        headers: {
          Authorization: localStorage.getItem("@times_token"),
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTimes();
  }, []);

  return (
    <Layout>
      <h1>Hello Home Page</h1>
    </Layout>
  );
}
