import { NextUIProvider, Tooltip } from "@nextui-org/react";
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
} from "@nextui-org/react";
import events_data from "../../data/events_data";
import Rounds from "./Rounds";
import EventDesc from "./EventDesc";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Event({ dept }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVertical, setIsVertical] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState("technical"); // State to manage active tab

  // Determine the type of event to display
  const events = selectedCategory
    ? events_data[dept]?.events?.[activeTab]?.[selectedCategory] || []
    : events_data[dept]?.events?.[activeTab] || [];

  const handleEventChange = (eventIndex) => {
    setSelectedEvent(events[eventIndex]);
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setSelectedEvent(null); // Reset selected event on category change
  };

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth <= 768) {
        setIsVertical(false); // Switch to horizontal on smaller screens
      } else {
        setIsVertical(true); // Use vertical on larger screens
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    setSelectedEvent(null);
  }, [activeTab]);

  useEffect(() => {
    if (events.length > 0) {
      setSelectedEvent(events[0]);
      if (events.length > 1) {
        toast.info('Note: There are multiple events under this department, choose the events in the blue dropdown.');
      }
    }
  }, [events]);

  return (
    <NextUIProvider>
      <div className="w-screen h-full flex flex-col items-center px-3 bg-cover bg-center bg-starry-sky pb-10">
        <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="px-5 flex flex-col space-y-8 mt-4 opacity-90 rounded-xl max-w-screen-lg">
          {/* Conditional Category Selection for CSE */}
          {dept === "cse" && !selectedCategory && (
            <div className="m-5 p-5 flex justify-between items-center gap-2 md:flex-row flex-col text-white text-2xl rounded-xl">
              <Tooltip content="Select a category to view events" placement="top">
                <div
                  className="w-64 hover:scale-110 hover:bg-white hover:text-black transition-all duration-300 p-5 m-5 border-blue-400 border-1 bg-gray-900 md:w-1/3 h-44 text-3xl text-center text-raleway text-bold font-dosis flex items-center justify-center rounded-lg cursor-pointer"
                  onClick={() => handleCategorySelection("SSN")}
                >
                  SSN CSE Department
                </div>
              </Tooltip>
              <Tooltip content="Select a category to view events" placement="top">
                <div
                  className="w-64 hover:scale-110 hover:bg-white hover:text-black transition-all duration-300 p-5 m-5 border-blue-400 border-1 bg-gray-900 md:w-1/3 h-44 text-3xl text-center text-raleway text-bold font-dosis flex items-center justify-center rounded-lg cursor-pointer"
                  onClick={() => handleCategorySelection("SNUC")}
                >
                  SNUC School of Computing
                </div>
              </Tooltip>
            </div>
          )}

          {/* Tab Section */}
          {(dept !== "cse" || selectedCategory) && (
            <div className="flex flex-col items-center">
              <div className="flex w-1/2 md:w-64 space-x-4 mb-4 justify-between">
                <button
                  className={`px-4 font-dosis font-bold py-2 rounded-t-lg ${activeTab === "technical" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"} transition-colors duration-300`}
                  onClick={() => setActiveTab("technical")}
                >
                  Technical
                </button>
                <button
                  className={`px-4 py-2 font-dosis rounded-t-lg ${activeTab === "non_technical" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"} transition-colors duration-300`}
                  onClick={() => setActiveTab("non_technical")}
                >
                  Non-Technical
                </button>
              </div>

              {/* Dropdown Section */}
              <div className="flex flex-col justify-center">
                <div className="flex flex-col space-y-4 justify-center items-center">
                  <Tooltip content="Select an event from the dropdown" placement="top">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button
                          auto
                          icon={<FaChevronDown />}
                          className="w-3/4 text-white bg-blue-600 hover:bg-blue-700 font-bold font-raleway uppercase flex items-center justify-between"
                        >
                          {selectedEvent ? selectedEvent.event_name : "Select Event"}
                          <div>▼</div>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu>
                        {events.map((event, index) => (
                          <DropdownItem
                            key={index}
                            onClick={() => handleEventChange(index)}
                            className="w-3/4 text-blue-600 hover:bg-orange-100 font-raleway"
                          >
                            {event.event_name}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </Tooltip>
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
                        <div className="text-white italic font-raleway p-5 text-xl">
                          HOSTED BY THE DEPARTMENT OF {dept.toUpperCase()}
                        </div>
                        <div className="w-full flex flex-col gap-5 text-white">
                          <EventDesc
                            first={selectedEvent["first"] || "TBD"}
                            second={selectedEvent["second"] || "TBD"}
                            third={selectedEvent["third"] || "TBD"}
                            date={selectedEvent["date"]}
                            location={selectedEvent["location"]}
                            participants={selectedEvent["participants"]}
                            dept={dept}
                          />
                          <div className="text-center text-xl font-dosis">
                            {/* {selectedEvent.event_desc} */}
                            {selectedEvent.event_desc.split('\n').map((line, index) => (
                                <p key={index} className="text-justify">
                                  {line}
                                </p>
                              ))}
                          </div>
                          {selectedEvent.domain && (
                            <p className="text-center text-lg font-dosis">
                              Domain: {selectedEvent.domain}
                            </p>
                          )}
                          {selectedEvent.team_size && (
                            <p className="text-center text-lg font-dosis mb-1">
                              Team Size: {selectedEvent.team_size}
                            </p>
                          )}
                          {selectedEvent.mode && (
                            <p className="text-center text-lg font-dosis mb-1">
                              Mode of Event: {selectedEvent.mode}
                            </p>
                          )}
                          <div className="flex flex-col w-full h-full justify-center items-center gap-4">
                            {selectedEvent.rounds.map((round, roundIndex) => (
                              <Rounds
                                key={roundIndex}
                                round_name={round.round_name}
                                round_desc={round.round_desc}
                              />
                            ))}
                            <div>
                              {selectedEvent.tagline.split('\n').map((line, index) => (
                                <p key={index} className="text-left">
                                  {line}
                                </p>
                              ))}
                            </div>
                            {selectedEvent.event_heads && (
                              <div className="w-full flex flex-col items-center gap-4">
                                <h3 className="text-2xl text-white font-bold mb-2 font-dosis">
                                  Event Heads
                                </h3>
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
          )}
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </NextUIProvider>
  );
}

export default Event;
