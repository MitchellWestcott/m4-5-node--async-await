const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  // write write write
  try {
    const options = await request({
      uri: "https://api.tronalddump.io/random/quote",
      headers: {
        "User-Agent": "Request-Promise",
      },
      json: true,
    });
    if (options) {
      return options.value;
    } else {
      throw "Oops! I've likely made a mistake.";
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

// getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };
