// eslint-disable-next-line 
// @ts-ignore
import elasticTypeMark from "./images/elasticTypeMark.png";
import {
  thunkActions,
  useAppDispatch,
  useAppSelector,
} from "../store/provider";
export const Header = () => {
  const dispatch = useAppDispatch();
  const userRole = useAppSelector((state) => state.userRole);

  return (
    <div className="flex flex-row justify-between space-x-6 px-8 py-3.5 bg-dark-ink w-full">
      <div className="pr-8 border-r border-ink">
        <img width={118} height={40} src={elasticTypeMark} />
      </div>
    </div>
  );
};
