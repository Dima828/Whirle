import Button from "../Button/Button";
import "../Started/Started.css";

export default function Started() {
  return (
    <section className="started">
      <div className="started__inner">
        <h1 className="started__title">Get started with Whirl</h1>
        <div className="started__desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <Button>Book a demo</Button>
        <div className="started__sub-desc">
          <span>
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1L5.3333 8L1 4.50003"
                stroke="#6D757C"
                stroke-width="1.6"
              />
            </svg>
            Free 30-day trial
          </span>
          <span>
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1L5.3333 8L1 4.50003"
                stroke="#6D757C"
                stroke-width="1.6"
              />
            </svg>
            No credit-card required
          </span>
        </div>
      </div>
    </section>
  );
}
