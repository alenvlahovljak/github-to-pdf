//require Express app
const app = require("./app");

//define PORT
const PORT = process.env.PORT || 8000;

//Open PORT
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
