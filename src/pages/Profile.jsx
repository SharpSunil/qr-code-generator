import React from "react";
import "./Profile.scss";

const Profile = () => {
  const params = new URLSearchParams(window.location.search);
  const encodedData = params.get("data");
  if (!encodedData) {
    return <p>No profile data found.</p>;
  }
  let profile;
  try {
    const base64 = encodedData.replace(/-/g, "+").replace(/_/g, "/");
    const paddedBase64 = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
    profile = JSON.parse(atob(paddedBase64));

    // Retrieve image from localStorage if not present
    if (!profile.image) {
      const storedImage = localStorage.getItem("profileImage");
      if (storedImage) {
        profile.image = storedImage;
      }
    }
  } catch (error) {
    console.error("Error decoding profile data:", error);
    return <p>Invalid profile data.</p>;
  }

  return (
    <div className="profile-parent parent">
      <div className="profile-container container">
        {profile.image && <img src={profile.image} alt="Profile" />}
        <h1 className="profile-name">{profile.name}</h1>
        <p>
          <strong>Contact:</strong>{" "}
          <a href={`tel:${profile.contactNumber}`}>{profile.contactNumber}</a>
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>

        {profile.website && (
          <p>
            <strong>Website:</strong>{" "}
            <a href={profile.website} target="_blank" rel="noreferrer">
              {profile.website}
            </a>
          </p>
        )}

        {profile.facebook && (
          <p>
            <strong>Facebook:</strong>{" "}
            <a href={profile.facebook} target="_blank" rel="noreferrer">
              {profile.facebook}
            </a>
          </p>
        )}
        {profile.instagram && (
          <p>
            <strong>Instagram:</strong>{" "}
            <a href={profile.instagram} target="_blank" rel="noreferrer">
              {profile.instagram}
            </a>
          </p>
        )}

        {profile.twitter && (
          <p>
            <strong>Twitter:</strong>{" "}
            <a href={profile.twitter} target="_blank" rel="noreferrer">
              {profile.twitter}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
