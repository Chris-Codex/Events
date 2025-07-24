export const menuItems = [
    {id: 0, type: "events", value: "Events"},
    {id: 1, type: "about", value: "About"},
    {id: 2, type: "contact", value: "Contact"},
    {id: 3, type: "policy", value: "Policy"}
];

export const cardMenuItems = [
    {id: 0, type: "all", value: "All"},
    {id: 1, type: "workshop", value: "Workshop"},
    {id: 2, type: "exhibition", value: "Exhibition"},
    {id: 3, type: "Panel", value: "Panel"}
]

// Sub-Menus
import { FiGrid } from "react-icons/fi";
import { CgCalendarDates } from "react-icons/cg";

export const subMenuicons = [
    {icon: FiGrid, label: "Grid"},
    {icon: CgCalendarDates, label: "Calender"}
]


//Featured Events
import feature_0 from "../assets/images/ft-1.jpg"
import feature_1 from "../assets/images/ft-2.jpg"
import feature_2 from "../assets/images/ux_design.webp"
import feature_3 from "../assets/images/digital.jpg"
import feature_4 from "../assets/images/panel.webp"
import feature_5 from "../assets/images/ft-4.jpg"


//Category Events
export const events = [
    {
      id: 0,
      name: "Typography Workshop",
      image: feature_0,
      sub_title: "Digital Arts Studio, Room 302",
      time: "10:00 AM - 12:00 PM",
      attendees: "18",
      description: "Learn the fundamentals of typography and how to use type creatively in your designs.",
      category: "Workshop"
    },
    {
      id: 1,
      name: "Minimalist Design Exhibition",
      image: feature_1,
      sub_title: "Modern Art Gallery, East Wing",
      time: "10:00 AM - 12:00 PM",
      attendees: "45",
      description: "An exhibition showcasing minimalist design across various mediums.",
      category: "Exhibition"
    },
    {
      id: 2,
      name: "UX Design Workshop",
      image: feature_2,
      sub_title: "Tech Hub, Conference Room B",
      time: "Nov 25, 3:30 PM",
      attendees: "12",
      description: "Dive deep into user experience design principles and methodologies.",
      category: "Workshop"
    },

    {
      id: 3,
      name: "Digital Art Showcase",
      image: feature_3,
      sub_title: "Virtual Reality Center",
      time: "Dec 5, 6:00 PM",
      attendees: "30",
      description: "Explore the cutting edge of digital art in this immersive showcase.",
      category: "Exhibition"
    },
    {
      id: 4,
      name: "Sustainable Design Panel",
      image: feature_4,
      sub_title: "Community Center, Main Hall",
      time: "Dec 12, 1:00 PM",
      attendees: "25",
      description: "Join leading designers for a discussion on sustainable design practices.",
      category: "Panel"
    },
    {
      id: 5,
      name: "Motion Graphics Masterclass",
      image: feature_5,
      sub_title: "Animation Studio, Workshop Space",
      time: "Dec 18, 9:00 AM",
      attendees: "15",
      description: "Take your animation skills to the next level with this masterclass.",
      category: "Workshop"
    },
   
  ];
  

