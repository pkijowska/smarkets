import { EventDetails } from "@/types/types";
import Link from "next/link";
import { getEventDetails } from "@/utils/api";
import style from "./EventDetails.module.css";

const EventPage = async ({
  params,
}: {
  params: {
    category: string;
    id: string;
  };
}) => {
  const { event_states }: EventDetails = await getEventDetails(params.id);
  const firstEventState = event_states[0];
  return (
    <div className={style.container}>
      <div className={`${style.card} card-base`}>
        <h3>Event details:</h3>
        {firstEventState.id && (
          <p>
            <strong>Event ID:</strong> {firstEventState.id}
          </p>
        )}
        {firstEventState.info && firstEventState.info.round && (
          <p>
            <strong>Round:</strong> {firstEventState.info.round}
          </p>
        )}
        {firstEventState.info && firstEventState.info.qualifying_rule && (
          <p>
            <strong>Qualifying Rule:</strong>{" "}
            {firstEventState.info.qualifying_rule}
          </p>
        )}
        {firstEventState.info && (
          <p>
            <strong>Deciding Match:</strong>{" "}
            {firstEventState.info.deciding_match ? "Yes" : "No"}
          </p>
        )}
        {firstEventState.info && (
          <p>
            <strong>Is Qualifying League:</strong>{" "}
            {firstEventState.info.is_qualifying_league ? "Yes" : "No"}
          </p>
        )}
        <p>More info to come</p>
        <Link href={`/events/${params.category}`}> {"> "}Back to category</Link>
      </div>
    </div>
  );
};
export default EventPage;
