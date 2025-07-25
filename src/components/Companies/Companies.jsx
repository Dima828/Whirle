import focusfox from "../../assets/images/companies/focusfox.svg";
import nowintech from "../../assets/images/companies/nowintech.svg";
import optimer from "../../assets/images/companies/optimer.svg";
import carded from "../../assets/images/companies/carded.svg";

import "./Companies.css";

export default function Companies() {
  return (
    <section className="companies">
      <h3 className="companies__title">Trusted by 50,000+ companies</h3>
      <div className="companies__body">
        <ul className="companies__list">
          <li className="companies__list-item">
            <img src={focusfox} alt="focusfox" className="compaines__img" />
          </li>
          <li className="companies__list-item">
            <img src={nowintech} alt="nowintech" className="compaines__img" />
          </li>
          <li className="companies__list-item">
            <img src={optimer} alt="optimer" className="compaines__img" />
          </li>
          <li className="companies__list-item">
            <img src={carded} alt="carded" className="compaines__img" />
          </li>
        </ul>
      </div>
    </section>
  );
}
