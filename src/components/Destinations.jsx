import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.jpg";
import Destination2 from "../assets/Destination2.jpg";
import Destination3 from "../assets/Destination3.jpg";
import Destination4 from "../assets/Destination4.jpg";
import Destination5 from "../assets/Destination5.jpg";
import Destination6 from "../assets/Destination6.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Destinations() {
    const destinationsData = [
        {
            image: Destination1,
            title: "Maasai Mara",
            subTitle: "Mara, officially the Republic of Kenya, is a",
            cost: "38,800",
            duration: "Approx 2 night trip",
        },
        {
            image: Destination2,
            title: "Mombasa",
            subTitle: "Mombasa is a coastal city in Kenya. It's known for its cultural heritage and coastal beaches.",
            cost: "54,200",
            duration: "Approx 2 night trip",
        },
        {
            image: Destination3,
            title: "Nakuru",
            subTitle: "Nakuru is a Kenyan city with popular tourist attractions.",
            cost: "45,500",
            duration: "Approx 2 night trip",
        },
        {
            image: Destination4,
            title: "Turkana",
            subTitle: "Is a major tourist destination harboring scenic views of the Chalbi Desert.",
            cost: "24,100",
            duration: "Approx 1 night trip",
        },
        {
            image: Destination5,
            title: "Tsavo",
            subTitle: "Tsavo is the largest animal reserve in Kenya, holding the largest number of wildlife.",
            cost: "95,400",
            duration: "Approx 2 night 2 day trip",
        },
        {
            image: Destination6,
            title: "London",
            subTitle: "London, the capital of England and the United Kingdom.",
            cost: "38,800",
            duration: "Approx 3 night 2 day trip",
        },
    ];

    const travelPackages = [
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel",
    ];

    const [activePackage, setActivePackage] = useState(1);

    return (
        <Section id="destinations">
            <div className="title">
                <h2>Some of our Destinations</h2>
            </div>
            <Packages>
                <ul>
                    {travelPackages.map((pkg, index) => (
                        <li
                            key={index}
                            className={activePackage === index + 1 ? "active" : ""}
                            onClick={() => setActivePackage(index + 1)}
                        >
                            {pkg}
                        </li>
                    ))}
                </ul>
            </Packages>
            <DestinationsGrid>
                {destinationsData.map((destination, index) => (
                    <DestinationCard key={index}>
                        <img src={destination.image} alt={destination.title} />
                        <h3>{destination.title}</h3>
                        <p>{destination.subTitle}</p>
                        <Info>
                            <Services>
                                <img src={info1} alt="info1" />
                                <img src={info2} alt="info2" />
                                <img src={info3} alt="info3" />
                            </Services>
                            <h4>{destination.cost}</h4>
                        </Info>
                        <Distance>
                            <span>1000 Kms</span>
                            <span>{destination.duration}</span>
                        </Distance>
                    </DestinationCard>
                ))}
            </DestinationsGrid>
        </Section>
    );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
`;

const Packages = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  ul {
    display: flex;
    list-style-type: none;
    width: max-content;
    li {
      padding: 1rem 2rem;
      border-bottom: 0.1rem solid black;
      cursor: pointer;
    }
    .active {
      border-bottom: 0.5rem solid #8338ec;
    }
  }
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 0 3rem;

  @media screen and (min-width: 280px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const DestinationCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #8338ec14;
  border-radius: 1rem;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  img {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Services = styled.div`
  display: flex;
  gap: 0.3rem;

  img {
    border-radius: 1rem;
    background-color: #4d2ddb84;
    width: 2rem;
    padding: 0.3rem 0.4rem;
  }
`;

const Distance = styled.div`
  display: flex;
  justify-content: space-between;
`;
