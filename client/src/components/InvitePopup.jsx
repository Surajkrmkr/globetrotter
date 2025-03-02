import React, { useEffect, useState } from "react";

const InvitePopup = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [inviteLink, setInviteLink] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
    setInviteLink(`${window.location.origin}/invite/${username}`);
  }, [username]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Invite link copied!");
  };

  return (
    <div className="invite-popup">
      <h3>Challenge a Friend!</h3>
      <p>Invite your friend to beat your score!</p>
      <input type="text" value={inviteLink} readOnly />
      <div>
        <button onClick={handleCopyLink}>Copy Link</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InvitePopup;
