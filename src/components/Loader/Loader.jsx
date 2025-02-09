import { PropagateLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <PropagateLoader color="#023E8A" />
    </div>
  );
};
