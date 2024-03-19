import { render } from "@testing-library/react";
import { CATEGORIES } from "@/utils/utils";
import Sidebar from "@/components/Sidebar/Sidebar";

describe("CategorySidebar", () => {
  it("matches the snapshot", () => {
    const { container } = render(<Sidebar selectedCategory={"Football"} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the 7 category links", () => {
    render(<Sidebar selectedCategory={"football"} />);
    const links = CATEGORIES.length;
    expect(links).toBe(7);
  });

  it("highlights the selected category", () => {
    const { container } = render(<Sidebar selectedCategory={"Football"} />);
    const selected = container.querySelector(
      "a[data-testid='active']"
    )?.textContent;

    expect(selected).toBe("⚽️ Football");
  });
});
