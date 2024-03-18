import { EventDetails } from "@/types/types";
import Link from "next/link";
import { getEventDetails } from "@/utils/api";

const EventPage = async ({
  params,
}: {
  params: {
    category: string;
    id: string;
  };
}) => {
  const { event_states }: { event_states: EventDetails } =
    await getEventDetails(params.id);
  console.log(event_states, "event_states");
  return (
    <div>
      <h1>Event Page!!!!!!!!!!</h1>

      <Link href={`/events/${params.category}`}>Back to category</Link>
    </div>
  );
};
export default EventPage;
