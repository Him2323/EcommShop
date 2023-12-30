import bcrypt from "bcryptjs";

const users = [
  {
    name: "Himanshu Shirodkar",
    email: "adminhimanshu@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rajendra Shirodkar",
    email: "rajendra@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Vaishali Shirodkar",
    email: "vaishali@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Gudu Shirodkar",
    email: "gudu@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
