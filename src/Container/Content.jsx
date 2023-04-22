import React from "react";
//Container files
import Todo from "./Todo";
import Cards from "./Cards";
import Button from "./Button";
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
import pic3 from "../assets/images/pic3.png";
import pls from "../assets/small-icons/pls.png";

const Home = () => {
  return (
    <div className="flex-grow p-6 mx-8  
    bg-[#FCFBFC]
    ">
      <div className="flex flex-col  md:flex-row  lg:flex-row xxl:">
        <div className="w-full md:w-1/2 gap-4  flex flex-col items-start gap-4 lg:gap-2">
          <Todo pTag="TO DO" number="3" />

          {/**pic card */}
          <Cards
            imagePath={pic2}
            imgAlt="card-image"
            title="Highfidelity Design"
            description="Make clear design and color"
            img={dot}
            listpic={List}
            infor="progress"
            figure="2/10"
            linepic={Slider2}
            message={chati}
            pic={Link}
            number="7"
            digit="2"
            profile={Profile}
          />
          {/**no picture */}
          <Cards
            imgAlt="no-image"
            title="Usability testing"
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
            description="Make clear design and color "
            className=""
          />
          <Button Plus={pls} link="ADD TASK" />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-start gap-4 lg:gap-3">
          <Todo pTag="Inprogress" number="1" />

          <Cards
            imagePath={pic}
            imgAlt="Card-image"
            title="Highfidelity Design"
            description="Make clear design and color "
            img={dot}
            listpic={List}
            infor="progress"
            figure="3/10"
            linepic={Slider}
            message={chati}
            pic={Link}
            number="7"
            digit="2"
            profile={Profile}
          />
          <Button Plus={pls} link="ADD TASK" />
        </div>
        <div className="w-full md:1/2 lg:w-1/2 flex flex-col items-start gap-4 lg:gap-3 ">
          <Todo pTag="Completed" number="2" />

          <Cards
            imgAlt="no-image"
            title="Usability testing"
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
            description="Make clear design and color"
            className=""
          />
          <Cards
            imagePath={pic3}
            imgAlt="card-image"
            title="Highfidelity Design"
            description="Make clear design and color"
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
          />
          <Button Plus={pls} link="ADD TASK" />
        </div>
      </div>
    </div>
  );
};

export default Home;
