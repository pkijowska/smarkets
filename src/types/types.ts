export type Events = {
    bet_allowed: boolean;
    bettable: boolean;
    chart_time_period: null;
    created: string;
    description: string;
    display_order: number;
    end_date: null | string;
    full_slug: string;
    hidden: boolean;
    id: string;
    inplay_enabled: boolean;
    modified: string;
    name: string;
    parent_id: string;
    seo_description: null | string;
    short_name: string;
    slug: string;
    special_rules: string;
    start_date: string;
    start_datetime: string;
    state: string;
    type: string;
}[]
  
export type EventDetails = {
  actual_end_datetime: null | string,
  actual_start_datetime: null | string,
  aggregate: null | any,
  clock: null | any,
  has_league_table: boolean,
  hidden: boolean,
  id: string,
  info: null | any,
  instant_match: boolean,
  match_period: string,
  probable_pitcher: null | any,
  provider_metadata: null | any,
  reversed: boolean,
  scores: null | any,
  show_flags: null | any,
  state: string,
  tennis_server: null | any,
  visualization: null | any,
};

export type Categories = {
  slug: string;
  label: string;
  type_domain: string;
  emoji: string;
}[]