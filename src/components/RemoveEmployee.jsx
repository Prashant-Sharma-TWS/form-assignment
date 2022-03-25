async function RemoveEmployee(url) {
  try {
    let res = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application-type/json; charset=UTF-8" },
    });
  } catch (error) {
    console.log("Error: ", error);
  }
}

export { RemoveEmployee };
