let endPage;
const GetEmployeeData = async (url) => {
  try {
    let response = await fetch(url);
    endPage = response.headers.get("X-Total-Count");
    return response.json();
  } catch (error) {
    console.log("Error: ", error);
  }
};

export { GetEmployeeData, endPage };
