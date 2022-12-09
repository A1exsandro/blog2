import "./styles.css";

import profileImage from "../../assets/images/avatar.jpeg"

export default function AuthorBadge(){
	return (
		<div className="author-badge-container">
			<img src={profileImage} />
				<h3>Alexsandro</h3>
		</div>
	)
}