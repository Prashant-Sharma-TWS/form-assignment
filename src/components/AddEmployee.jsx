const AddEmployee = async (form, url) => {
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(form),
    });
    return response.json();
  } catch (error) {
    console.log("Error: ", error);
  }
};

export { AddEmployee };
