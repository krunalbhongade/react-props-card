import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Krunal"
      email="krunal.bhongade@gmail.com"
      alt="krunal"
      src="https://avatars.githubusercontent.com/u/126875304?s=400&u=937251cd3e19c6a7f0c7df76f830a80aaa019984&v=4"
      tel="8888837654"
    />

    <Card
      name="adi"
      email="adi.bhongade@gmail.com"
      alt="adi"
      src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg"
      tel="8888837666"
    />

    <Card
      name="sonu"
      email="sonu.bhongade@gmail.com"
      alt="sonu"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="8877777737666"
    />

    <Card
      name="kiran"
      email="kiran.bhongade@gmail.com"
      alt="kiran"
      src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg"
      tel="837666"
    />
  </div>,
  document.getElementById("root")
);
