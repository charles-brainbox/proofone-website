import CookieConsent from "react-cookie-consent";

export const CookieConsentComponent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
      enableDeclineButton
      declineButtonText="Decline"
      flipButtons
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};
