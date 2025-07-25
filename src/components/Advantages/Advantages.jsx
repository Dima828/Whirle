import fast from "../../assets/images/advantages/fast.svg";
import more from "../../assets/images/advantages/more.svg";
import safe from "../../assets/images/advantages/safe.svg";

import "./Advantages.css";

export default function Advantages() {
  return (
    <section className="advantages">
      <ul className="advantages__list">
        <li className="advantages__list-item fast">
          <img src={fast} alt="fast" className="advantages__image" />
          <h4 className="list-item__title">Fast. Really fast.</h4>
          <p className="list-item__desc">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </li>
        <li className="advantages__list-item more">
          <img src={more} alt="fast" className="advantages__image" />
          <h4 className="list-item__title">More bang for buck.</h4>
          <p className="list-item__desc">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </li>
        <li className="advantages__list-item safe">
          <img src={safe} alt="fast" className="advantages__image" />
          <h4 className="list-item__title">Safe and secure.</h4>
          <p className="list-item__desc">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </li>
      </ul>
    </section>
  );
}
