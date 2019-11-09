import Axios from "axios";

// TODO: Change to dynamic base url based on setup
export default Axios.create({ baseURL: "http://localhost:3000" });
