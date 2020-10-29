// nothing here yet...
const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (req, res) => {
  const jokeType = req.params.type;

  try {
    if (jokeType === "dad") {
      const dadJoke = await getDadJoke();
      res.status(200).json({
        status: 200,
        jokeType: `${dadJoke}`,
      });
    } else if (jokeType === "tronald") {
      const dumpJoke = await getTronaldDumpQuote();
      res.status(200).json({
        status: 200,
        jokeType: `${dumpJoke}`,
      });
    } else if (jokeType === "geek") {
      const tastelessJoke = await getGeekJoke();
      res.status(200).json({
        status: 200,
        jokeType: `${tastelessJoke}`,
      });
    } else {
      res.status(400).json({
        status: 400,
        error: "Looks like the joke you're looking for isn't here",
      });
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

module.exports = { handleJoke };
