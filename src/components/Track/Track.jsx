import track from "../../assets/images/track_image/track.svg";

import "../../components/Track/Track.css";
import Button from "../Button/Button";

export default function Track() {
  return (
    <section className="track">
      <div className="track__inner">
        <div className="track__left">
          <img src={track} alt="" />
        </div>
        <div className="track__right">
          <h1 className="track__title">Set, forget, and then track.</h1>
          <div className="track__desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <ul className="track__list">
            <li className="track__list-item">
              <svg
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 1L6.66663 11L1 6.00004"
                  stroke="#FFCCDD"
                  stroke-width="1.6"
                />
              </svg>
              Understand your options
            </li>
            <li className="track__list-item">
              {" "}
              <svg
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 1L6.66663 11L1 6.00004"
                  stroke="#FFCCDD"
                  stroke-width="1.6"
                />
              </svg>
              No lock-ins
            </li>
            <li className="track__list-item">
              {" "}
              <svg
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 1L6.66663 11L1 6.00004"
                  stroke="#FFCCDD"
                  stroke-width="1.6"
                />
              </svg>
              You own the shares
            </li>
          </ul>
          <Button>Book a demo</Button>
        </div>
      </div>
    </section>
  );
}
