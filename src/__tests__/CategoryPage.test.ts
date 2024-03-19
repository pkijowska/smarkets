import { getEvents } from "@/utils/api";
import { render, screen } from "@testing-library/react";
import CategoryPage from "@/app/events/[category]/page";

jest.mock("../utils/api", () => ({
  getEvents: jest.fn(),
  }));
  
describe("CategoryPage", () => {
  beforeEach(() => {
    (getEvents as jest.Mock).mockResolvedValue({
      events: [
        {
          bet_allowed: true,
          bettable: true,
          chart_time_period: null,
          created: '2024-02-29T08:24:00.564134Z',
          description: null,
          display_order: 0,
          end_date: null,
          full_slug: '/sport/basketball/champions-league/2024/03/19/17-30/pinar-karsiyaka-vs-hapoel-jerusalem',
          hidden: false,
          id: '43724399',
          inplay_enabled: true,
          modified: '2024-03-18T11:41:20.317371Z',
          name: 'Pinar Karsiyaka vs Hapoel Jerusalem',
          parent_id: '20310762',
          seo_description: null,
          short_name: null,
          slug: 'pinar-karsiyaka-vs-hapoel-jerusalem',
          special_rules: null,
          start_date: '2024-03-19',
          start_datetime: '2024-03-19T17:30:00Z',
          state: 'upcoming',
          type: 'basketball_match'
        }
      ]
    });
  });

  it("matches the snapshot", async () => {
    const params = { category: "Football" };
    const { container } = render(await CategoryPage({ params }));
    expect(container).toMatchSnapshot();
  })

  it("renders the name correctly", async () => {
    const params = { category: "Football" };
    const { container } = render(await CategoryPage({ params }));
    expect(container.textContent).toMatch(/Pinar Karsiyaka vs Hapoel Jerusalem/);
  });

});