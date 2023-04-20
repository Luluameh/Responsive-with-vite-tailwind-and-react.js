import React from 'react'
import Features from '../Container/Features'
import Cards from '../Container/Cards'
import Button from "../Container/Button";
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


const Dashboard = () => {

  return (
    <div>
    <div className="w-full">
      <Features/>
      <div className="flex flex-col lg:flex-row l:ml-[20%] xl:ml-[20%] xxl:gap-24">
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 lg:gap-1">
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


        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 lg:gap-1">

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



        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 lg:gap-1">

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



        </div>




      </div>
    </div>


    </div>
  )
}

export default Dashboard