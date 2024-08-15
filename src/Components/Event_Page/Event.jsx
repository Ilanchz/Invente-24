import { NextUIProvider } from "@nextui-org/react";
import Navelement from "../Navelement";
import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Switch,
  ScrollShadow,
} from "@nextui-org/react";
import events_data from "../../data/events_data";
import Rounds from "./Rounds";
import EventDesc from "./EventDesc";
import { FaCog, FaPlay } from "react-icons/fa";

function Event({ dept }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVertical, setIsVertical] = React.useState(true);
  const [isTechnical, setIsTechnical] = React.useState(true);

  const height = `calc(100vh - 350px)`;

  // Determine the type of event to display
  const eventType = isTechnical ? "technical" : "non_technical";

  // Map through the selected event type
  const eventTabs = events_data[dept]["events"][eventType]?.map(
    (event, index) => (
      <Tab
        key={index}
        title={event.event_name}
        color="primary"
      >
        <Card className="w-[75vw] ">
          <CardBody
            className="flex flex-col items-center"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 51, 102, 0.9) 20%, rgba(85, 0, 119, 0.9) 80%)",
              backdropFilter: "blur(200px)", // Optional: Adds a blur effect for better transparency look
            }}
          >
            <h2 className="text-3xl font-semibold mb-4 mt-4 text-white ">
              {event.event_name}
            </h2>
            <EventDesc
              winner={event["winner"]}
              runner={event["runner"]}
              date={event["date"]}
              location={event["location"]}
              participants={event["participants"]}
            />
            <ScrollShadow
            hideScrollBar
              size={60}
              className="w-[100%] flex flex-col space-y-4 px-8 text-white"
              style={{ height }}
            >
              <p className="text-center mt-8 text-justify px-4 text-[17px]">
                {event.event_desc}
              </p>
              {event.rounds.map((round, roundIndex) => (
                <Rounds
                  key={roundIndex}
                  round_name={round.round_name}
                  round_desc={round.round_desc}
                />
              ))}
            </ScrollShadow>
          </CardBody>
        </Card>
      </Tab>
    )
  );


  useEffect(() => {
    // Function to update layout based on screen width
    const updateLayout = () => {
      if (window.innerWidth <= 768) {
        setIsVertical(false); // Switch to horizontal on smaller screens
      } else {
        setIsVertical(true); // Use vertical on larger screens
      }
    };

    // Initial check
    updateLayout();

    // Update layout on window resize
    window.addEventListener("resize", updateLayout);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateLayout);
  }, []);


  return (
    <NextUIProvider>
      <div className="w-screen h-screen flex flex-col items-center px-3 overflow-x-hidden bg-cover bg-center bg-starry-sky">
        <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="px-[130px] flex flex-col space-y-8 mt-4">
          <div className="flex w-full space-x-[10px] items-center justify-end px-[80px]">
            <span className="text-white">Technical</span>
            <Switch
              size="lg"
              color="secondary"
              checked={!isTechnical}
              startContent={<FaCog />} // Icon for Technical
              endContent={<FaPlay />}
              onChange={() => setIsTechnical(!isTechnical)}
            />
            <span className="text-white">Non Technical</span>
          </div>
          <div className="flex flex-col px-10">
            <div className="flex flex-col">
              <Tabs color="secondary" aria-label="Options" isVertical={isVertical}>
                {eventTabs}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default Event;
