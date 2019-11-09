import url from "url";
import qs from "querystring";
import Axios from "../axios";
import { NextPageContext } from "next";

interface Props {
	name: string;
}
export default function Home({ name }: Props) {
	return <div>Bienvenue {name}!</div>;
}

Home.getInitialProps = async ({ req }: NextPageContext) => {
	let name = "john";
	if (req && req.url) {
		const parsed = url.parse(req.url, true);
		console.log("request url", req.url, parsed);
		name = parsed.query.name || name;
	}
	const { data } = await Axios.get<{ name: string }>("/api/" + name);
	return data;
}
