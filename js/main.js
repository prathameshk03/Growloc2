
// header scroll


let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (e) {
  e.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});


document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("here");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let text = document.getElementById("text").value;
  let message = document.getElementById("message").value;

  if (!name || !email || !text || !message) {
    document.getElementById("error").style.display = "block";
  } else {
    try {
      let mailTransporter = createTransport({
        service: "gmail",

        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      let mailDetails = {
        from: process.env.EMAIL,
        to: email,
        subject: "Email For Forgot Password",
        text: `HELLO`,
      };

      mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
});
