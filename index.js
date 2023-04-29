const Notification = (props) => {
  //  Write your code here.
  const {
    notificationContainer,
    bgColor,
    innerContainer,
    src,
    icon,
    notificationText,
  } = props;
  return (
    <div className={`${notificationContainer} ${bgColor}`}>
      <div className={innerContainer}>
        <img src={src} className={icon} />
        <p>{notificationText}</p>
      </div>
    </div>
  );
};
const primaryIcon =
  "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
const successIcon =
  "https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
const warningIcon =
  "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
const dangerIcon =
  "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";
const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      notificationContainer="notification-container"
      bgColor="information-message"
      innerContainer="inner-container"
      src={primaryIcon}
      icon="icon"
      notificationText="Information Message"
    />
    <Notification
      notificationContainer="notification-container"
      bgColor="success-message"
      innerContainer="inner-container"
      src={successIcon}
      icon="icon"
      notificationText="Success Message"
    />
    <Notification
      notificationContainer="notification-container"
      bgColor="warning-message"
      innerContainer="inner-container"
      src={warningIcon}
      icon="icon"
      notificationText="Warning Message"
    />
    <Notification
      notificationContainer="notification-container"
      bgColor="danger-message"
      innerContainer="inner-container"
      src={dangerIcon}
      icon="icon"
      notificationText="Danger Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
