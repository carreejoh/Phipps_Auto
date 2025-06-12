
// <------ CLIENT VALUES ------->

export const clientConfig = {

  // Themes / Colors
  daisy_theme: "business",
  logo_color: "#36B300",
  // Set primary / secondary colors in index.css

  // Other styling
  borders: "rounded-none",


  // General
  short_name: "Phipp's Automotive",
  long_name: "Phipp's Automotive LLC",
  phone: "(801) 513-1146",
  phoneLink: "8015131146",
  email: "phippsautorepair@gmail.com",
  address: "808 E 1st Ave,",
  addressSecondary: "Salt Lake City, UT 84103",
  addressFull: "808 E 1st Ave, Salt Lake City, UT 84103",

  // Header
  logo: "/brand_imgs/logo.png",

};

// <------ COMPONENT SELECTION ------->

export const componentSelection = {
  // default, contact
  header: "contact",
  
  // centeredPhoto,
  // leftPhoto
  landing: "leftPhoto",

  // default, 
  // primary
  services: "default",

  // singleImage,
  // ownerTeam,
  // ownerTeamFlex,
  // ownerTeamFlexAngle
  about: "ownerTeamFlexAngle",

  // default
  reviews: "default",

  // default
  contact: "default"
}

// <------ LANDING VALUES ------->

export const landingConfig = {
  landing_img: "/brand_imgs/hero.png",
  landing_title: "Quality Service Right at Your Home",
  landing_subtext: "We are a locally owned mobile mechanic service that will strive to satisfy and serve the community with quality service at an affordable price.",
  landing_cta: "GIVE US A CALL",
  landing_type: 0,
}


// <------- SERVICE VALUES ------->

export const serviceConfig = {
  // bg-base-300 for solid, url for photo
  bg: "url(/services_imgs/tire_background.jpg)"
}

export const serviceCardConfig = [
  {
    title: "Tire Services",
    description: "We handle all your tire needs with expert care.",
    image: "/services_imgs/tireBalance.jpg",
    items: [
      "Tire repair",
      "Tire balancing",
      "Tire swapping"
    ]
  },
  {
    title: "Engine Repair",
    description: "Keep your engine running like new.",
    image: "/services_imgs/engineRepair.jpg",
    items: [
      "Diagnostics",
      "Timing belt replacement",
      "Engine rebuild"
    ]
  },
  {
    title: "Scheduled Maintenance",
    description: "Regular service to keep your vehicle in top shape.",
    image: "/services_imgs/oilChange.jpeg",
    items: [
      "Oil change",
      "Battery testing",
      "Fluid change"
    ]
  },
  {
    title: "Brakes",
    description: "Stay safe with professional brake service.",
    image: "/services_imgs/brakeJob.jpg",
    items: [
      "Brake pad replacement",
      "Rotor resurfacing",
      "Fluid bleed"
    ]
  }
];

// <--------- ABOUT US -------->

export const aboutUsConfig = {
  description: "Founded with a mission to redefine trust in auto repair, we’ve built our reputation on honesty, hard work, and community values. Whether it’s a quick tune-up or a major rebuild, you can count on us to get the job done right.",
  team_image: "/about_imgs/team.jpg",
  team_description: "Exceptional team members ready to get you back on the road with precision and care. Each technician brings years of experience, honesty, and a commitment to getting the job done right the first time.",
  owner_image: "/about_imgs/owner.png",
  owner_name: "John Doe",
  owner_description: "Founded with a mission to redefine trust in auto repair, we’ve built our reputation on honesty, hard work, and community values. Whether it’s a quick tune-up or a major rebuild, you can count on us to get the job done right."
}

export const aboutUsCardConfig = [
  {
    fullName: "John Martinez",
    yearsOfExperience: 18,
    image: "/about_imgs/owner.png",
    description: "ASE-certified master technician with nearly two decades of experience in engine diagnostics and repair."
  },
  {
    fullName: "Alex Brooks",
    yearsOfExperience: 12,
    image: "/about_imgs/owner.png",
    description: "Brake system specialist with a strong focus on clear communication. "
  },
  {
    fullName: "Leo Nguyen",
    yearsOfExperience: 9,
    image: "/about_imgs/owner.png",
    description: "Expert in electrical diagnostics and hybrid systems. "
  },
  {
    fullName: "Emily Chavez",
    yearsOfExperience: 6,
    image: "/about_imgs/owner.png",
    description: "Skilled in oil systems, tire work, and general maintenance."
  }
];


// <------- REVIEWS ------->

export const reviewsConfig = [
  {
    fullName: "Jessica Taylor",
    reviewValue: 5,
    timePosted: "06/01/2025",
    reviewText:
      "Absolutely incredible service. They diagnosed and fixed my car faster than I expected, and the staff was super friendly and professional. Highly recommended!",
  },
  {
    fullName: "Marcus Bennett",
    reviewValue: 4,
    timePosted: "05/28/2025",
    reviewText:
      "Great work on my brakes. Fair pricing and clear communication. The only reason I'm not giving 5 stars is the slightly long wait time, but the quality was excellent.",
  },
  {
    fullName: "Elena Rodriguez",
    reviewValue: 5,
    timePosted: "05/20/2025",
    reviewText:
      "This shop has exceeded my expectations every single time. Friendly staff, clean facility, and flawless service. I won’t take my car anywhere else.",
  },
  {
    fullName: "David Chen",
    reviewValue: 5,
    timePosted: "05/15/2025",
    reviewText:
      "Everything from the check-in process to the final result was smooth and professional. My car runs perfectly now. Definitely a 5-star experience.",
  },
  {
    fullName: "Amanda Greene",
    reviewValue: 5,
    timePosted: "05/10/2025",
    reviewText:
      "They went above and beyond. Explained every step, finished ahead of schedule, and even offered a courtesy ride. Easily one of the best shops I’ve worked with.",
  },
];



// <------- CONTACT INFO -------->

export const contactConfig = {
  phone: "(801) 513-1146",
  phoneLink: "8015131146",
  email: "phippsautorepair@gmail.com",
  location: {
    address: "808 E 1st Ave,",
    addressSecondary: "Salt Lake City, UT 84103",
    googleMapEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2852.0261769189833!2d-111.86600676630495!3d40.77045747188815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f563484f582f%3A0xa64e169e8dd5eddd!2sPhipps%20Automotive%20LLC!5e0!3m2!1sen!2sus!4v1749755639030!5m2!1sen!2sus",
    googleMapLink: "https://www.google.com/maps/place/Phipps+Automotive+LLC/@40.7704575,-111.8660068,17.08z/data=!4m14!1m7!3m6!1s0x8752f563484f582f:0xa64e169e8dd5eddd!2sPhipps+Automotive+LLC!8m2!3d40.7703531!4d-111.865359!16s%2Fg%2F11w4dkx2nt!3m5!1s0x8752f563484f582f:0xa64e169e8dd5eddd!8m2!3d40.7703531!4d-111.865359!16s%2Fg%2F11w4dkx2nt?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D",
    appleMapLink: "https://maps.apple.com/?ll=40.7703531,-111.865359&q=Phipps%20Automotive%20LLC"
  },
  hours: [
    { day: "Monday", time: "8 AM - 6 PM" },
    { day: "Tuesday", time: "8 AM - 6 PM" },
    { day: "Wednesday", time: "8 AM - 6 PM" },
    { day: "Thursday", time: "8 AM - 6 PM" },
    { day: "Friday", time: "8 AM - 6 PM" },
    { day: "Saturday", time: "9 AM - 4 PM" },
    { day: "Sunday", time: "Closed" },
  ]
}