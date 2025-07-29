import search from "../../assets/images/abou_image/search.svg";
import safe from "../../assets/images/abou_image/safe.svg";

import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <h1 className="about__title">
          What's Whirl <br /> all about?
        </h1>
        <ul className="about__list">
          <li className="about__list-item">
            <h3 className="list-item__title">All on one place.</h3>
            <div className="list-item__desc">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li className="about__list-item">
            <img src={search} alt="" />
            <h3 className="list-item__title">Get daily alerts.</h3>
            <div className="list-item__desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </li>
          <li className="about__list-item">
            <img src={safe} alt="" />
            <h3 className="list-item__title">Safe and secure.</h3>
            <div className="list-item__desc">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
