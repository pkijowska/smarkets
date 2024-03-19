import { Events } from "@/types/types";
import style from "./Category.module.css";
import { getEvents } from "@/utils/api";
import EventCard from "@/components/EventCard/EventCard";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const { events }: Events = await getEvents(params.category);
  return (
    <div className={style.container}>
      {events.map((event) => (
        <EventCard key={event.id} category={params.category} event={event} />
      ))}
    </div>
  );
};
export default CategoryPage;
