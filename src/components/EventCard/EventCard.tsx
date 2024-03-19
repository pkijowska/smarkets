import { Event } from "@/types/types";
import style from "./EventCard.module.css";
import { formatUTCDate } from "@/utils/utils";
import Link from "next/link";

const EventCard = ({ event, category }: { event: Event; category: string }) => {
  return (
    <div className={`${style.card} card-base`}>
      <div className={style.innerCard}>
        <h3>{event.name}</h3>
        <p>{event.description}</p>
        <p>{formatUTCDate(event.start_datetime)}</p>
      </div>
      <Link href={`/events/${category}/${event.id}`}>{">"} View event</Link>
    </div>
  );
};
export default EventCard;
