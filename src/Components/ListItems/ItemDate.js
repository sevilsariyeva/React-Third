import expiredImage from "../ListItems/expired.png";

export function HasExpired({ expireDate }) {
  const now = new Date();
  const expirationDate = new Date(expireDate);
  if (now > expirationDate) {
    return (
      <img
        alt="expired"
        src={expiredImage}
        style={{
          position: "absolute",
          left: "-35px",
          top: "55px",
          height: "100px",
          width: "200px",
        }}
      />
    );
  } else {
    return null;
  }
}
