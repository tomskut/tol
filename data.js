// Add smooth scroll effect
document.addEventListener("DOMContentLoaded", () => {
  // Animate profile card on load
  const profileCard = document.querySelector(".profile-card");
  profileCard.style.opacity = "0";
  profileCard.style.transform = "translateY(20px)";

  setTimeout(() => {
    profileCard.style.transition = "all 0.8s ease";
    profileCard.style.opacity = "1";
    profileCard.style.transform = "translateY(0)";
  }, 200);

  // Add hover effect to profile image
  const profileImg = document.querySelector(".profile-img");
  profileImg.addEventListener("mouseover", () => {
    profileImg.style.transform = "scale(1.1)";
    profileImg.style.transition = "transform 0.3s ease";
  });

  profileImg.addEventListener("mouseout", () => {
    profileImg.style.transform = "scale(1)";
  });
});

// You can add more interactivity here as needed
