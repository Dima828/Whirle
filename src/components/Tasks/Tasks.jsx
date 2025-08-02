import options from "../../assets/images/tasks__image/options.svg";
import informated from "../../assets/images/tasks__image/informated.svg";
import automate from "../../assets/images/tasks__image/automate.svg";
import informed from "../../assets/images/tasks__image/informed.svg";

import "../Tasks/Tasks.css";

export default function Tasks() {
  return (
    <section className="tasks">
      <div className="tasks__inner">
        <h1 className="tasks__title">Your tasks, automated.</h1>
        <div className="tasks__desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <ul className="tasks__list">
          <li className="tasks__list-item">
            <img src={options} alt="" className="tasks__image" />
            <h1 className="list-item__title">Learn your options.</h1>
            <div className="list-item__desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </li>
          <li className="tasks__list-item">
            <img src={informated} alt="" className="tasks__image" />
            <h1 className="list-item__title">Stay informed.</h1>
            <div className="list-item__desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et doloretro.
              </p>
            </div>
          </li>
          <li className="tasks__list-item">
            <img src={automate} alt="" className="tasks__image" />
            <h1 className="list-item__title">Automate it all.</h1>
            <div className="list-item__desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ipsum.
              </p>
            </div>
          </li>
          <li className="tasks__list-item">
            <img src={informed} alt="" className="tasks__image" />
            <h1 className="list-item__title">Stay informed.</h1>
            <div className="list-item__desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et consectetur.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
