document.addEventListener("DOMContentLoaded", () => {
  const volunteersButton = document.getElementById("volunteers_button");
  const donationButton = document.getElementById("donation_button");

  volunteersButton.addEventListener("click", () => {
    window.location.href = "../volunteers/volunteers.html";
  });

  donationButton.addEventListener("click", () => {
    window.location.href = "../donation/donation.html";
  });
});
