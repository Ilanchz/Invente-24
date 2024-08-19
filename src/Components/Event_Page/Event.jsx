import { NextUIProvider } from "@nextui-org/react";
import Navelement from "../Navelement";
import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
  Card,
  CardBody,
  ScrollShadow,
} from "@nextui-org/react";
import events_data from "../../data/events_data";
import Rounds from "./Rounds";
import EventDesc from "./EventDesc";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../Footer";

function Event({ dept }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVertical, setIsVertical] = useState(true);
  const [isTechnical, setIsTechnical] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const height = `calc(100vh - 350px)`;

  // Determine the type of event to display
  const eventType = isTechnical ? "technical" : "non_technical";
  const events = events_data[dept]?.events?.[eventType] || [];

  // Handle dropdown change
  const handleEventChange = (eventIndex) => {
    setSelectedEvent(events[eventIndex]);
  };

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

  useEffect(() => {
    // Reset selectedEvent when isTechnical changes
    setSelectedEvent(null);
  }, [isTechnical]);

  useEffect(() => {
    // Set the first event as selected if available
    if (events.length > 0) {
      setSelectedEvent(events[0]);
    }
  }, [events]);

  return (
    <NextUIProvider>
      <div className="w-screen h-screen flex flex-col items-center px-3 overflow-x-hidden bg-cover bg-center bg-starry-sky pb-10">
        <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="px-[130px] flex flex-col space-y-8 mt-4">
          {/* Switch Section */}
          <div className="flex w-full items-center justify-end px-[80px] space-x-4">
            <span className="text-white text-lg">
              {isTechnical ? "Technical" : "Non Technical"}
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={!isTechnical}
                onChange={() => setIsTechnical(!isTechnical)}
                className="sr-only peer"
              />
              <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-600 dark:peer-checked:bg-blue-600 relative">
                <div className="absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-full transition-transform"></div>
              </div>
            </label>
          </div>
          {/* Dropdown Section */}
          <div className="flex flex-col px-10">
            <div className="flex flex-col space-y-4">
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    auto
                    icon={<FaChevronDown />}
                    className="text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {selectedEvent ? selectedEvent.event_name : "Select Event"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  {events.map((event, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => handleEventChange(index)}
                      className="text-blue-600 hover:bg-blue-100"
                    >
                      {event.event_name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              {selectedEvent && (
                <Card className="md:w-[70vw] w-[90vw] m-4">
                  <CardBody
                    className="flex flex-col items-center p-6"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0, 51, 102, 0.9) 20%, rgba(85, 0, 119, 0.9) 80%)",
                      backdropFilter: "blur(200px)", // Optional: Adds a blur effect for better transparency look
                    }}
                  >
                    <h2 className="text-3xl text-white font-raleway font-extrabold mb-4">
                      {selectedEvent.event_name}
                    </h2>

                    <div className="text-white italic font-raleway p-5 text-xl">HOSTED BY THE DEPARTMENT OF {dept.toUpperCase()}</div>
                    
                    <div
                      className="w-full flex flex-col gap-10 text-white"
                    >
                      <EventDesc
                        winner={selectedEvent["winner_prize"]}
                        runner={selectedEvent["runner_up_prize"]}
                        date={selectedEvent["date"]}
                        location={selectedEvent["location"]}
                        participants={selectedEvent["participants"]}
                        dept={dept}
                      />
                      <p className="text-center text-xl font-dosis mb-4">
                        {selectedEvent.event_desc}
                      </p>
                      <div className="flex flex-col w-full h-full justify-center items-center gap-4">
                        {selectedEvent.rounds.map((round, roundIndex) => (
                          <Rounds
                            key={roundIndex}
                            round_name={round.round_name}
                            round_desc={round.round_desc}
                          />
                        ))}
                        <p className="text-md p-5 text-center font-raleway">{selectedEvent.tagline}</p>
                        {selectedEvent.event_heads && (
                          <div className="w-full flex flex-col items-center gap-4">
                            <h3 className="text-2xl text-white font-bold mb-2 font-dosis">Event Heads</h3>
                            <div className="flex gap-2 flex-col md:flex-row">
                            {selectedEvent.event_heads.map((head, headIndex) => (
                              <div
                                key={headIndex}
                                className="text-white p-4 shadow-lg bg-black rounded-lg w-64 text-center"
                              >
                                <p className="text-md font-semibold">{head}</p>
                              </div>
                            ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </NextUIProvider>
  );
}

export default Event;
