const request = require("request-promise");

const getGeekJoke = async () => {
  // ha hahahh
  try {
    const options = await request({
      uri: "https://geek-jokes.sameerkumar.website/api",
      headers: {
        "User-Agent": "Request-Promise",
      },
      json: true,
    });
    if (options) {
      return options;
    } else {
      throw "Oops! I've likely made a mistake.";
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

// getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };
