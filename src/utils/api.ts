export async function getEvents(category: string) {
    try {
      const response = await fetch(
        `https://api.smarkets.com/v3/events/?state=upcoming&type=${category}_match&type_domain=${category}&type_scope=single_event&with_new_type=false&sort=id&limit=20&include_hidden=false`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error during fetch");
    }
}

export const getEventDetails = async (id: string) => {
    try {
      const response = await fetch(
        `https://api.smarkets.com/v3/events/${id}/states/`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
        throw new Error("Error during fetch");
    }
};