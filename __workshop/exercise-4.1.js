const request = require("request-promise");

// getDadJoke

const getDadJoke = async () => {
  try {
    const options = await request({
      uri: "https://icanhazdadjoke.com/",
      headers: {
        "User-Agent": "Request-Promise",
      },
      json: true,
    });
    if (options) {
      return options.joke;
    } else {
      throw "Oops! I've likely made a mistake.";
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

// 4.1
// getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
