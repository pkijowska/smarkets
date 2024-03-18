import { formatUTCDate } from "@/utils/utils";
import { Events } from "@/types/types";
import Link from "next/link";
import style from "./Category.module.css";
import { getEvents } from "@/utils/api";

const EventPage = async ({ params }: { params: { category: string } }) => {
  const { events }: { events: Events } = await getEvents(params.category);

  return (
    <div className={style.container}>
      {events.map((event) => (
        <div key={event.id} className={style.card}>
          <div className={style.innerCard}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>{formatUTCDate(event.start_datetime)}</p>
          </div>
          <Link href={`/events/${params.category}/${event.id}`}>
            {">"} View event
          </Link>
        </div>
      ))}
    </div>
  );
};
export default EventPage;
