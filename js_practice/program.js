let str = "asdkfhalsjfsfdlahkwehfkwefhiuqiulafdscn;egahgi";
function Position(alphabet) {
  let positions = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === alphabet) {
      positions += i + ",";
    }
  }
  console.log(positions)
}

Position("a")
