import { API_URL } from "../app/contants";
import Provider from "./provide";

async function getProvide(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function MovieProvides({ id }: { id: string }) {
  const provides = await getProvide(id);
  return (
    <>
      <div>
        <Provider AE={provides.AE} />
      </div>
    </>
  );
}
