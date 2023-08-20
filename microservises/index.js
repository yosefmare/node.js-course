const userInfo = require("./BLL/usersBLL")
const useName = "Bret";
userInfo.userInfos(useName)
.then((data) => console.log(data))
.catch((error) => console.log(error))

