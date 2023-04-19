import React from "react";
//Container files
import Features from "../Container/Features";
import Cards from "../Container/Cards";
import Button from "../Container/Button";
import Card from "../Container/Card";
//images from assest/images and one from assests/small-icons
import pic from "../assets/images/pic.png";
import pic2 from "../assets/images/pic2.png";
import Profile from "../assets/small-icons/Profile.png";
import Link from "../assets/images/Link.png";
import Slider2 from "../assets/images/Slider2.png";
import Slider from "../assets/images/Slider.png";
import Slider3 from "../assets/images/Slider3.png";
import dot from "../assets/images/dot.png";
import chati from "../assets/images/chati.png";
import List from "../assets/images/List.png";

const Home = () => {
  return (
    <div className=" ">
      <Features />
      <div className=" h-screen flex">
        <div className="h-full flex flex-col items-start">
          {/**pic card */}
          <Cards
            imagePath={pic2}
            imgAlt="card-image"
            title="Card Title 2"
            description="Sed do eiusmod tempor incididunt ut labo."
            img={dot}
            listpic={List}
            infor="progress"
            figure="2/10"
            linepic={Slider}
            message={chati}
            pic={Link}
            number="7"
            digit="2"
            profile={Profile}
          />
          {/**no picture */}
          <Cards
            imgAlt="no-image"
            title="Card Title 3"
            img={dot}
            listpic={List}
            infor="progress"
            figure="2/10"
            linepic={Slider3}
            message={chati}
            pic={Link}
            number="7"
            digit="2"
            profile={Profile}
            description="sdfghgjhnm, mbvcxsdertyhb"
            className=""
          />
          <Cards
            imagePath={pic}
            imgAlt="Card-image"
            title="Card Title 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            img={dot}
            listpic={List}
            infor="progress"
            figure="3/10"
            linepic={Slider2}
            message={chati}
            pic={Link}
            number="7"
            digit="2"
            profile={Profile}
          />
        </div>

        <div className="h-full flex flex-col items-start">
          <Cards
            imgAlt="no-image"
            title="Card Title 3"
            img={dot}
            listpic={List}
            infor="progress"
            figure="2/10"
            linepic={Slider3}
            message={chati}
            pic={Link}
            number="7"
            digit="2"
            profile={Profile}
            description="sdfghgjhnm, mbvcxsdertyhb"
            className=""
          />
          <Cards
            imagePath={pic2}
            imgAlt="card-image"
            title="Card Title 2"
            description="Sed do eiusmod tempor incididunt ut labo."
            img={dot}
            listpic={List}
            infor="progress"
            figure="2/10"
            linepic={Slider}
            message={chati}
            pic={Link}
            number="7"
            digit="2"
            profile={Profile}
          />
          <Button />
        </div>
        <div className="h-full flex flex-col items-start">
          <Cards
            imgAlt="no-image"
            title="Card Title 3"
            img={dot}
            listpic={List}
            infor="progress"
            figure="2/10"
            linepic={Slider3}
            message={chati}
            pic={Link}
            number="7"
            digit="2"
            profile={Profile}
            description="sdfghgjhnm, mbvcxsdertyhb"
            className=""
          />
          <Button />
          <Cards
            imagePath={pic2}
            imgAlt="card-image"
            title="Card Title 2"
            description="Sed do eiusmod tempor incididunt ut labo."
            img={dot}
            listpic={List}
            infor="progress"
            figure="2/10"
            linepic={Slider}
            message={chati}
            pic={Link}
            number="7"
            digit="2"
            profile={Profile}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
