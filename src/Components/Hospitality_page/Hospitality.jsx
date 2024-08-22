import { useState } from "react";
import Navelement from "../Navelement";
import Footer from "../Footer";

function Link({ label, href = "#" }) {
  return (
    <a href={href} className="underline font-semibold">
      {label}
    </a>
  );
}

const HOSPITALITY = {
  Instructions: [
    {
      content: [
        <>
          Fill the gform for Invente accommodation: {<Link label={"link"} />}
        </>,
      ],
    },
    {
      content: [<>Click here to view bus routes: {<Link label={"link"} />}</>],
    },
    {
      title: "Registration:",
      content: [
        "Participants must register for accommodation on the Invente website using the Google Form link provided.",
        "After registration, you will receive a copy of your response via registered email",
      ],
    },
    {
      title: "On Arrival:",
      content: [
        "Bring your college ID card.",
        "Have the email copy of your response ready during check-in.",
        "Report at the respective hostel (boys/girls) front office.",
        "Hospitality volunteers will be present on-site for assistance.",
      ],
    },
    {
      title: "Instructions For Participants:",
      content: [
        "Participants must bring their own bedsheets, pillows and other necessary items.",
        "Participants must take responsibility for the safety of their belongings. The institution bears no responsibility for any loss or damage.",
        "Participants should arrive on the campus before 8:30 p.m. on the day of arrival.",
      ],
    },
    {
      title: "Note:",
      content: [
        "For single-participant registrations, roommates will be assigned by the hospitality committee based on availability.",
      ],
    },
  ],
  "How to Reach": [
    {
      title: "SSN CAMPUS",
      content: [
        "Kalavakkam (Near Thiruporur) on Rajiv Gandhi Salai (Old Mahabalipuram Road)",
      ],
    },
    {
      title: "",
      content: [
        <div className="ml-8">
          <div className="font-bold list-disc list-item">
            FROM CHENNAI CENTRAL (44 km)
          </div>
          <ul className="ml-4 list-disc space-y-2">
            <li>Hire an auto/taxi.</li>
            <li>Board 221 bus directly from Central to SSN.</li>
            <li>
              Take the metro from Central to Airport. (Refer below for
              directions from Airport)
            </li>
          </ul>
        </div>,
      ],
    },
    {
      title: "",
      content: [
        <div className="ml-8">
          <div className="font-bold list-disc list-item">
            FROM EGMORE STATION (40 km)
          </div>
          <ul className="ml-4 list-disc space-y-2">
            <li>Hire an auto/taxi.</li>
            <li>
              Catch the 40603/40605 bus from Egmore Station to Tambaram and 515
              from Tambaram to SSN.
            </li>
          </ul>
        </div>,
      ],
    },
    {
      title: "",
      content: [
        <div className="ml-8">
          <div className="font-bold list-disc list-item">FROM CMBT (43 km)</div>
          <ul className="ml-4 list-disc">
            <li>Board direct bus 570X from CMBT to SSN.</li>
            <li>
              Take the metro from CMBT to Airport. (Refer below for directions
              from Airport)
            </li>
          </ul>
        </div>,
      ],
    },
    {
      title: "",
      content: [
        <div className="ml-8">
          <div className="font-bold list-disc list-item">
            FROM AIRPORT (38 km)
          </div>
          <ul className="ml-4 list-disc">
            <li>Board direct bus 570X from CMBT to SSN.</li>
            <li>
              Walk to the Tirusulam bus stop (700 m) and board bus
              40601/40603/40605/40751/70C from Tirusulam to Tambaram and 515
              from Tambaram to SSN.
            </li>
          </ul>
        </div>,
      ],
    },
  ],
  Accommodations: [
    {
      title: "",
      content: [
        <p className="mt-2">
          <span className="font-bold">Prohibited Activities:</span> Smoking,
          drinking, and the use of illegal substances are strictly prohibited.
          The college will take appropriate action if any participant is found
          in possession of these items.
        </p>,
        <p className="mt-2">
          <span className="font-bold">Respect for Property:</span> Any damage to
          college facilities or property provided to participants will result in
          serious consequences. Participants should note that their caution
          deposit will not be refunded if they cause damage to the property.
        </p>,
        <p className="mt-2">
          <span className="font-bold">Check-in Procedures:</span> Participants
          must keep their check-in receipts and ID cards safe throughout their
          stay. Upon check-in, they will be provided with room keys, which they
          should safeguard during their stay.
        </p>,
        <p className="mt-2">
          <span className="font-bold">Key Distribution:</span> Participants will
          receive their room keys during the check-in process. These keys must
          be returned upon check-out. Failure to return the keys will result in
          a deduction from the caution deposit.
        </p>,
        <p className="mt-2">
          <span className="font-bold">Valuables Responsibility:</span> The
          college does not assume responsibility for any loss or damage to
          personal property or valuables stored in the accommodation.
        </p>,
        <p className="mt-2">
          <span className="font-bold">Settlement of Accounts:</span> Upon
          check-out, guests are required to settle all outstanding bills for
          services rendered. The return of the caution deposit will be
          contingent upon the condition of the room and the return of the keys.
        </p>,
        <p className="mt-2">
          <span className="font-bold">Curfew for Participants:</span>{" "}
          Participants are expected to strictly adhere to curfew timings: 06:00
          AM - 08:30 PM.
        </p>,
        <p className="mt-2">
          <span className="font-bold">Dispute Resolution:</span> In the event of
          any disputes, the decision of the event organizers will be final and
          binding.
        </p>,
      ],
    },
  ],
  "Contact Us": [
    {
      title: "",
      content: [
        <div className="flex flex-col items-center justify-center w-full">
          <div>Reach out to us if you have any further queries...</div>
          <div className="space-y-4 mt-8">
            <div>
              <div className="font-bold">Name</div>
              <div>Phone</div>
            </div>
            <div>
              <div className="font-bold">Name</div>
              <div>Phone</div>
            </div>
          </div>
        </div>,
      ],
    },
  ],
};

export default function Hospitality() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [currentSection, setCurrentSection] = useState("Instructions");

  return (
    <div
      className="w-full min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      id="hackathon_tab"
      style={{
        backgroundImage: `url('/bg-image.jpg')`,
      }}
    >
      <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="max-w-5xl min-h-screen w-full flex-1 mx-auto text-white p-8 m-8 bg-gray-900 shadow-xl rounded-lg">
        <div className="font-bold text-3xl pb-8 font-libre text-center">Hospitality</div>
        <div className="pt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-between">
          {Object.keys(HOSPITALITY).map((section, index) => (
            <button
              onClick={() => setCurrentSection(section)}
              key={index}
              className={`border-2 p-4 rounded-sm font-bold font-raleway ${
                section === currentSection
                  ? "bg-white text-black"
                  : "hover:bg-white/40"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {HOSPITALITY[currentSection].map((data, index) => (
            <div key={index} className="mt-4 font-dosis text-lg">
              <div className="text-2xl font-bold">{data.title}</div>
              <ul
                className={`${
                  data.content.length > 1 && "list-disc ml-6 mt-2"
                }`}
              >
                {data.content.map((content, idx) => (
                  <li key={idx}>{content}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
