import React from "react";
import styles from "./donate.module.scss";
import donate from "./../../images/donate.png";

const Donate = () => {
  return (
    <form
      className={styles.button}
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="WBBAU93HLTUB8" />
      <input
        type="image"
        src={donate}
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_FR/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  );
};

export default Donate;
