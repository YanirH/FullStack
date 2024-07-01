import { useSelector } from "react-redux";
import "./TotalProducts.css";
import { AppState} from "../../../Redux/Store";

export function TotalProducts(): JSX.Element {
    const count = useSelector<AppState, number>(store => store.products?.length || 0)
    return (
        <div className="TotalProducts">
			<span>{`Total Products: ${count} `}</span>

        </div>
    );
}
