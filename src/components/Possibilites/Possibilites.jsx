import possibilites_image from "../../assets/images/possibilites_image/possibilities_image.svg";
import possibilites__icon_1 from "../../assets/images/possibilites_image/icon_1.svg";
import possibilites__icon_2 from "../../assets/images/possibilites_image/icon_2.svg";
import possibilites__icon_3 from "../../assets/images/possibilites_image/icon_3.svg";
import possibilites__icon_4 from "../../assets/images/possibilites_image/icon_4.svg";

import "./Possibilites.css";

export default function Possibilites() {
  return (
    <section className="possibilites">
      <div className="possibilites__inner">
        <h1 className="possibilites__title">
          We will take care of everything, <br /> so you can get back to
          relaxing.
        </h1>
        <div className="possibilites__body">
          <div className="possibilites__accordion-body">
            <ul className="possibilites__accordion-list">
              <li className="possibilites__accordion-item">
                <details className="possibilites__accordion" open>
                  <summary className="possibilites__accordion-header">
                    <img src={possibilites__icon_1} alt="" />
                    <h3 className="possibilites__accordion-title">
                      Anti-loss technology
                    </h3>
                  </summary>
                  <div className="possibilites__accordion-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </details>
              </li>
              <li className="possibilites__accordion-item">
                <details className="possibilites__accordion">
                  <summary className="possibilites__accordion-header">
                    <img src={possibilites__icon_2} alt="" />
                    <h3 className="possibilites__accordion-title">
                      Exchange easily
                    </h3>
                  </summary>
                  <div className="possibilites__accordion-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </details>
              </li>
              <li className="possibilites__accordion-item">
                <details className="possibilites__accordion">
                  <summary className="possibilites__accordion-header">
                    <img src={possibilites__icon_3} alt="" />
                    <h3 className="possibilites__accordion-title">
                      Fully encrypted
                    </h3>
                  </summary>
                  <div className="possibilites__accordion-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </details>
              </li>
              <li className="possibilites__accordion-item">
                <details className="possibilites__accordion">
                  <summary className="possibilites__accordion-header">
                    <img src={possibilites__icon_4} alt="" />
                    <h3 className="possibilites__accordion-title">
                      Plenty of options
                    </h3>
                  </summary>
                  <div className="possibilites__accordion-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </details>
              </li>
            </ul>
          </div>
          <img
            src={possibilites_image}
            alt="possibilities"
            width={481}
            height={479}
            className="possibilites__img"
          />
        </div>
      </div>
    </section>
  );
}
