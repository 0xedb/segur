const pbkdf2 = require("pbkdf2");

const generatePbkdf2 = (password, pepper) => {
  const salt = pepper || "QjHvzHdgLxfUYxEtwEcMoiW0fqxu9H0OcDFt0OUtsxYwIanCf1U0vdVyHUk28xsG8iNTWCZQRFbDwggIKWOJlA==admin@admin.com";
  return pbkdf2
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("base64");
};

module.exports = generatePbkdf2;
