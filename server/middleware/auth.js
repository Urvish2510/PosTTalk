import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    //Checking token is custom or google auth. if length < 500 them it is custom token.
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "NoHackbro");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
