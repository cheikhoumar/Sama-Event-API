const load = async (event) => {
  return { email: event.url.searchParams.get("email") };
};
export {
  load
};
