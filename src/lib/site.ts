export const site = {
  name: "Mahir Kılıç",
  tagline: "Philanthropist",
  email: "info@mahirkilic.com",
  phoneDisplay: "+44 7747 77 88 99",
  phoneTel: "+447747778899",
  address: "68 Stoke Newington High Street, London N16 7PA",
  url: "https://www.mahirkilic.com",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/philanthropy", label: "Philanthropy", child: { href: "/financial-report", label: "Financial Report" } },
  { href: "/charitable-activities", label: "Charitable Activities" },
  { href: "/freemasonry", label: "Freemasonry" },
  { href: "/awards", label: "Awards" },
  { href: "/contact-me", label: "Contact me" },
] as const;

export const home = {
  hero: {
    title: "Mahir Kılıç & Stephen Hawking",
    text: "Mahir Kilic & Stephen Hawking received the Honorary Freedom of the City of London. Kilic has received the highest honour the City can bestow, in recognition of his outstanding contributions to Humanitarian Aid and Civil Protection provided in Iraq & Syria.",
    image: "/images/hawking-freedom.jpg",
  },
  quotes: [
    {
      portrait: "/images/Churchhill.png",
      alt: "Winston Churchill",
      text: "We make a living by what we get; we make a life by what we give!",
      attribution: "Winston Churchill",
    },
    {
      portrait: "/images/Ataturk.png",
      alt: "Mustafa Kemal Atatürk",
      text: "The best person is who thinks about the social society to which he belongs more than himself, and who dedicates himself to the protection of its existence and happiness.",
      attribution: "Mustafa Kemal Atatürk",
    },
  ],
  breakdownTitle: "My charitable work breakdown:",
  breakdown: [
    { label: "Humanitarian Aid", percent: 90 },
    { label: "Diversity and Inclusion", percent: 70 },
    { label: "Protecting children affected by armed conflict", percent: 90 },
  ],
  roles: [
    { title: "Founder of Rescue 4 Children", dates: "Nov 2012 – Dec 2016" },
    { title: "UNHCR Field Worker", dates: "Nov 2014 – Oct 2016" },
    { title: "Founder of Freemasons Without Borders", dates: "March 2020 – Present" },
    { title: "Founding Member of Scouts Sans Frontières", dates: "July 2018 – Present" },
  ],
};

export const philanthropy = {
  intro:
    "My current philanthropic activities are Humanitarian Aid | Mark Benevolent Fund | Progressive Orders of Turkey",
  definition:
    "Greek playwright Aeschylus coined the term philanthropy in the 5th century BCE. It meant “love of humanity.” Today, philanthropy means generosity in all its forms and is often defined as giving gifts of “time, talent and treasure” to help make life better for other people.",
  sections: [
    {
      id: "humanitarian-aid",
      title: "Humanitarian Aid",
      eyebrow: "No Lost Generation",
      paragraphs: [
        "I've actively worked in the refugee camps with UNHCR, the UN Refugee Agency and the international humanitarian charities to provide and facilitate educational support to children 3 to 7 years old.",
        "No Lost Generation aims to expand access to education, increase psychosocial support, strengthen child protection, bolster social cohesion and promote peace building so that the children of Syria can build a better future for themselves, their families and their communities.",
        "I’ve been helping to “No Lost Generation” initiative by the United Nations, international and non-governmental organizations, and governments, to alleviate the impact of the Syrian crisis on children’s learning and psychological wellbeing and address the potential long-term consequences for a generation of children and young people in Syria and neighbouring countries since 2012 to 2019.",
      ],
      bulletsTitle: "Current philanthropic project I am working on in humanitarian aid as follows:",
      bullets: [
        "Providing support to protect children on the move by preventing unsafe movement",
        "Reducing violence against children on the move",
        "Reducing children’s anxiety, depression and aggressive behaviour, and increasing hope for the future",
      ],
    },
    {
      id: "mbf",
      title: "Mark Benevolent Fund",
      paragraphs: [
        "The Mark Benevolent Fund came into existence in 1868 on the suggestion of the Reverend George Raymond Portal, Grand Master of the Mark. His views on charity were far more radical and progressive than the general thinking of the time. He felt that for charity to be effective it had to be disbursed swiftly and without the bureaucratic formalities of other Masonic charities. To him it was wrong for there to be any delay in providing assistance to those in need and his own Latin tag “Bis dat qui cito dat” – he gives twice who gives promptly – became, and still is, the principal guideline of the M.B.F.",
        "I'm proud to support MBF since 2017. The MBF has disbursed many millions to individual petitioners and an even greater sum in grants to charities within the wider community. A major grant of £1.6m has been made to the RNLI help fund a new life boat, Addenbrooke’s Hospital Trust received over £2m for machines to help in the diagnosis of prostate cancer and a pledge of £2.6 million has been made to Hope for Tomorrow Cancer Charity for the purchase of mobile chemotherapy units throughout the UK. These projects can only be funded with your help and dedication to the fund.",
      ],
      link: {
        href: "https://markmasonshall.org/orders/mark-benevolent-fund",
        label: "Find more about MBF",
      },
    },
    {
      id: "progressive-orders",
      title: "Progresif Masonluk Derneği",
      paragraphs: [
        "Progresif Masonluk Derneği is a legally constituted Turkish association in Freemasonry (with similar principles of HKEMBL) for Progressive Orders in Turkey. We work to establish Progressive Orders in general but Mark Masonry in particular in Turkey.",
        "Turkish Freemasonry is stuck between Craft Freemasonry and Ancient and Accepted Scottish Rite. The mission of Progressive Orders in Turkey is to give Brethren a wider choices and experiences for their daily advancements in less known orders of freemasonry.",
      ],
    },
  ],
};

export const charitable = {
  quote:
    "There is a Chinese saying that goes: “If you want happiness for an hour, take a nap. If you want happiness for a day, go fishing. If you want happiness for a year, inherit a fortune. If you want happiness for a lifetime, help somebody.” For centuries, the greatest thinkers have suggested the same thing: Happiness is found in helping others.",
  current:
    "My current Charitable activities are: Sponsor a Child in Conflict Zone or Help ancient ethnic minority group: Yazidis · Freemasons Without Borders™ · Prostate Cancer · Scouts Sans Frontières™ · Commemoration of V.W.Bro. Celil Layiktez",
  sections: [
    {
      id: "fwb",
      title: "Freemasons Without Borders™",
      paragraphs: [
        "Freemasons Without Borders initiative set up as a weekly online meeting platform to keep Freemasons connected during the Covid-19 pandemic lockdowns which provided mental health support especially to 70+ members not just in United Kingdom but all around the world.",
        "I'm very proud as a founding father of FWB initiative and grateful for everyone whom continuing support it. FWB has set an example and inspired many similar online meetings groups among the Freemasons around the world during the pandemic.",
        "Please also visit Freemasons Without Borders Lodge of MMM No. 2031. A lodge that has been consecrated with 254 Mark Master Masons founders around the world on 30th October 2021 at United Grand Lodge of England–UGLE in London. This is 1st ever Mark lodge consecrated at Freemasons' Hall, UGLE in Mark Master Masons history. And the lodge has highest petitioners ever in the history of Mark Masonry.",
      ],
    },
    {
      id: "prostate",
      title: "Prostate Cancer",
      paragraphs: [
        "I'm an Ambassador Speaker available across England & Wales to talk about first-hand experience of prostate cancer, raising men's health awareness among masonic groups. Each year approximately 47,000 men in the UK are diagnosed with prostate cancer; it is the most common form of cancer amongst men, but it can often be treated successfully!",
      ],
      aimsTitle: "My aims are",
      aims: [
        "To raise awareness in men and their families of prostate cancer",
        "To provide information on the importance of talking to your doctor about prostate cancer",
        "To encourage men to engage with their general practitioners around health issues",
        "To provide a suite of presentations to address the varying information needs of people in the community about prostate cancer",
        "To deliver timely and evidence-based information about prostate cancer and related health issues",
      ],
      presentationsTitle: "Presentation Options",
      presentationsIntro:
        "There are three presentation topics to select from, each created to meet the varying needs of audiences:",
      presentations: [
        "Prostate Cancer: What You Need to Know",
        "Prostate Cancer: Treatment Options",
        "Prostate Cancer: What Partners and Carers Need to Know",
      ],
      note: "Presentations generally last 30 minutes, with Q & A time to follow, although this is flexible, dependant on your requirements. Please note I am not a medical professional. I can not give medical advice or recommend treatment options. Please contact me if you wish to book an Ambassador Presentation at your masonic festive board or social meetings.",
    },
    {
      id: "scouts",
      title: "Scouts Sans Frontières™",
      paragraphs: [
        "Disasters know no borders and can hit one or several countries simultaneously without warning. Every year, millions of people are forced to leave their home due to conflict, violence, human rights violations, persecution and natural hazards. The number of forcibly displaced people continued to rise in 2020, calling for increased humanitarian assistance.",
        "The World Organization of Independent Scouts with 46 affiliated Scout organizations in 19 countries established Scouts Sans Frontières™ in 2018. As a founding father of this initiative, our aim to provide Civil Protection and Humanitarian Aid Operations with wood badge holders around the world.",
        "I'm \"The Three Bead Wood Badge\" holder which is an award for Assistant Course Directors in Scouting and have experience of humanitarian aid in conflict zones over 6 years. My aim is to establish Emergency Response Coordination centre and create a team of 30 members with wood badge holder's in UK and Europe whose able to respond to Flooding, Extreme weather, Forest fire, earthquake, marine pollution.",
        "The Emergency Response Coordination centre will provide all necessary trainings via mobile / tablet apps in English, German, Spanish and French.",
      ],
    },
    {
      id: "celil",
      title: "Commemoration of V.W.Bro. Celil Layiktez",
      subtitle: "16-03-1935 ∼ 29-06-2020 — Very Worshipful Bro. Celil Layiktez",
      paragraphs: [
        "V.W.Bro. Celil Layiktez is one of the first names that come to mind without hesitation when it comes to the History of Freemasonry in Turkey. His researches, articles and books, some of which are published in English, are the reason why he is known not only in our country but also in the world.",
        "V.W.Bro. Celil Layiktez was a very special Brother to me. Perhaps it's something to do with \"11\". He was initiated at Müsavat Lodge No.11 under Turkish Constitutions. I was initiated at Enoch Lodge No. 11 under UGLE Constitution. He also has written 11 books!",
        "Anyone who knows V.W.Bro. Celil Layiktez knows very well that he was in love with his wife. Unfortunately he said goodbye to his precious wife on February 1, 2011. It's not surprising that he also had his name carved on her tombstone with his birthdate... I could not have ever guessed that I would have the task of carving the date of our Master's passing the Grand Lodge above to their tombstone to complete it.",
        "Six months after his funeral which was held during the Covid-19 restrictions I've managed to have a contact with Dogan Layiktez, son of V.W.Bro. Celil Layiktez who had all belongings of our beloved Brother. Dogan Layiktez offered to sell all masonic belongings and archives which included very important researches that he has done for substantial amount of money which I personally paid to save them.",
        "I'm proud to announce that all of our beloved Master's masonic works together with his masonic belongings are now available to Brethren at a museum named after him under Progresif Masonluk Dernegi. Celil Layiktez museum is accessible to all Brethren. Please contact Progresif Masonluk Dernegi to book your visit free of charge.",
        "Progresif Masonluk Dernegi is also taking care of the grave maintenance which includes gravestone cleaning, the replacement of gravel chippings, delivering fresh grave flowers, weeding and tending living plants, as well as ensuring that his grave is regularly cared for and tidy on weekly basis.",
        "His grave is located at Bulbulderesi Mezarligi, Uskudar-Istanbul where he rests with his beloved wife Nes'e Layiktez.",
      ],
      link: { href: "https://celillayiktez.com", label: "CelilLayiktez.COM" },
    },
  ],
};

export const freemasonry = {
  intro:
    "My masonic journey began when I was made first Freemasons in my heart in 2004.",
  pillars: [
    "Craft & Holy Royal Arch",
    "The Supreme Council",
    "Progressive Orders (Mark Master Masons, Royal Ark Mariners, Knights Templar, Royal & Select Masters, Allied Masonic Degrees, Order of the Secret Monitor, Scarlet Cord)",
  ],
  craft: {
    title: "Craft & The Holy Royal Arch",
    currentTitle: "My Current Craft Lodges are",
    lodges: [
      {
        name: "James Terry Lodge No. 2372",
        note: "since 12th May 2022",
        items: ["Joined on 12th May 2022"],
      },
      {
        name: "Lodge Light of the Craft No. 3265",
        note: "since 10th May 2016",
        items: [
          "Joined the LLOC on 10th May 2016",
          "Installed as Worshipful Master on 24th October 2017",
          "Appointed as Treasurer of 2022–2023",
        ],
      },
      {
        name: "Royal Colonial Institute Lodge No. 3556",
        note: "since 11th May 2022",
        items: ["Joined the LLOC on 11th May 2022", "Appointed as Treasurer of 2022–2023"],
      },
      {
        name: "Highgate Lodge No. 1366",
        note: "2014–2018",
        items: ["Joined on 8th March 2014", "Resigned on 19th Jan 2018"],
      },
      {
        name: "My Mother Lodge: ENOCH No. XI",
        note: "2005–2018",
        items: [
          "Initiated on 6th October 2005",
          "Passed on 2nd March 2006",
          "Raised on 5th October 2006",
          "Resigned on 12th Feb 2018",
        ],
      },
      {
        name: "Highgate Chapter No. 1365",
        note: "Holy Royal Arch",
        items: [
          "Exalted on 14/07/2014 to Present",
          "Installed as MEZ on 1st April 2022",
        ],
      },
    ],
  },
  supreme: {
    title: "The Supreme Council 33°",
    subtitle:
      "The Supreme Council 33° of the Ancient and Accepted Rite For England and Wales and its Districts and Chapters Overseas",
    items: [
      "Perfected on 28th September 2016 at Henry Cottrell Chapter No. 1163",
      "Joined the Bard of Avon Chapter No.44 on 25th May 2017",
    ],
  },
  promotions: {
    title: "Promotions — Grand Lodge of MMM",
    items: [
      "P.G.Stwd., 07/06/2022 – Present",
      "Grand Steward, 08/06/2021 – 07/06/2022",
      "P.Prov.G.M.O. London, 22/12/2020 – Present",
      "P.Prov.G.J.D. London, 11/07/2019 – 22/12/2020",
      "Prov. G.J.D. London, 12/07/2018 – 11/07/2019",
    ],
  },
  mark: {
    title: "Mark Master Masons",
    summary: [
      "I was Advanced to Mark Order at Highgate Mark on 28th June 2014.",
      "I'm the Primus Master of 1st ever Turkish speaking Mark Lodge consecrated under GLMMM, Gallipoli Lodge of Mark Master Masons No. 1984.",
      "Founder and Primus Immediate Past Master of the 2nd Turkish speaking Mark Lodge consecrated under GLMMM, Namik Kemal Lodge of Mark Master Masons No. 2001.",
      "Founder and Primus Immediate Past Master of the 3rd Turkish speaking Mark Lodge Anadolu Lodge of Mark Master Masons No.2024 — the first Turkish speaking lodge in Europe continent.",
    ],
    timeline: [
      { role: "Founder of Anadolu Lodge of MMM No. 2024, Brussels", date: "28/05/2022" },
      { role: "Joined ISMA Lodge of MMM No. 996", date: "22/02/2022 to Present" },
      { role: "Founder of Freemasons Without Borders Lodge of MMM No. 2031", date: "30/10/2021 to Present" },
      { role: "Joined The Mark Internet No. 1975", date: "07/11/2020 to Present" },
      { role: "Founding Member of Khalsa Lodge of MMM No. 2022", date: "07/03/2020 to Present" },
      { role: "Joined London Installed Mark Masters No. 1227", date: "25/02/2019 to Present" },
      { role: "Founder of Namik Kemal Lodge of MMM No. 2001", date: "23/02/2019 to Present" },
      { role: "Founding Member of The Ralph Reader Lodge of MMM No. 1997", date: "13/10/2018 to Present" },
      { role: "Primus Master of Gallipoli Lodge of MMM No. 1984", date: "17/11/2017 to Present" },
      { role: "Joined Roentgen Portal Lodge of MMM", date: "09/03/2017 to Present" },
      { role: "Advanced at Highgate Lodge of MMM No. 1909", date: "28/06/2014 to Present" },
    ],
  },
  ram: {
    title: "Royal Ark Mariner",
    summary: [
      "I was Elevated to Royal Ark Mariner Order at Highgate Mark on 5th December 2015.",
      "I'm the Primus Master of 1st ever Turkish speaking RAM Lodge consecrated under GLMMM, Gallipoli Lodge of Royal Ark Mariners No. 1984.",
    ],
    timeline: [
      { role: "Founding Almoner, Khalsa RAM No. 2022", date: "26/02/2022 to Present" },
      { role: "Founding Junior Warden, The Ralph Readers RAM No. 1997", date: "06/11/2021 to Present" },
      { role: "Joined London Installed Commanders RAM No. 1227", date: "25/02/2019 to Present" },
      { role: "Primus Commander at Gallipoli Lodge of RAM No. 1984", date: "12/05/2018 to Present" },
      { role: "Elevated at Highgate Lodge of RAM No. 1909", date: "05/12/2015 to Present" },
    ],
  },
  otherOrders: [
    {
      title: "Knights Templar",
      items: ["Installed West Kent No. 0371 on 1st September 2017"],
    },
    {
      title: "Royal & Select Masters",
      items: [
        "Joined Jerusalem No. 0332 on 20th September 2021 to Present",
        "Admitted to White Horse of Kent No. 0093 on 27th September 2016 (to 27/06/2019)",
      ],
    },
    {
      title: "Allied Masonic Degrees",
      items: ["Joined Council of the Four Kings No. 7 on 25th January 2022 to Present"],
    },
    {
      title: "Order of the Secret Monitor",
      items: [
        "Provincial Grand Steward in Middlesex since 11th September 2019",
        "Joined Peter Glyn Williams No. 0456 on 26th February 2021 to Present",
        "Inducted Uxbridge Conclave & Fraternal Union Consistory 1909 on 28th June 2014",
      ],
    },
    {
      title: "Scarlet Cord",
      items: [
        "Provincial Grand Steward in Middlesex since 21st March 2020",
        "Conferred at Fraternal Union No. 0060 on 4th July 2019 to Present",
      ],
    },
  ],
};

export const awards = {
  title: "Lifetime awards",
  items: [
    {
      date: "30 October 2022",
      title: "Certificate from His Royal Highness Prince Michael of Kent, GCVO",
    },
    {
      date: "29th January 2022",
      title: "Certificate from Mark Benevolent Fund — Grand Patron Diamond",
    },
  ],
};

export const financial = {
  periods: [
    {
      title: "2021–2022",
      intro: "Various Charities supported during the pandemic through by myself.",
      items: [
        "£42,000 donated to Progresif Masonluk Dernegi – Turkey during 2019–2022",
        "£1,900 donated to GLMMM MBF in London",
        "£1,000 donated toward getting a new electric wheelchair",
      ],
    },
    {
      title: "2019–2021",
      intro: "£18,000 donated to various education fundings including full payment of MBA programme and others.",
      items: [
        "Primus Master of the Gallipoli Lodge, W. Bro. Mahir Kilic, granted $9,850 to A Begum B. for her Master’s degree at De Montfort University Leicester during 2020–2021.",
        "£2,000 donated to Spinal muscular atrophy (SMA) campaign via gofundme in London",
        "£1,000 donated to Khalsa Lodge of MMM for ventilators during the peak of Covid-19 cases in India, 2021",
        "I have not listed three beneficiaries which totals up to £7,000 due to their request to remain anonymous.",
      ],
    },
    {
      title: "2012–2017",
      intro: "Various Charities supported during the breakout of civil war in Syria",
      items: [
        "£270,000 worth of donations taken and distributed in Syria & Iraq",
        "3 Children playfields donated to Dara Shakran, Kawergosk and Qushtapa Refugee Camps",
        "I've worked with UNHCR and other international NGO's in Syria and Iraq between 2013–2016.",
        "I also worked with U.S.-led coalition forces which involved frontline service. I've completed my very last frontline service at the \"Battle of Mosul\" which was an operation to liberate Mosul in December 2016. We have brought over 400 displaced Iraqi civilians from Kokjali neighbourhood to the camp we setup at Ninova region.",
      ],
    },
  ],
};

export const contact = {
  title: "Donations & Sponsorships",
  paragraphs: [
    "In order to manage charitable contributions in a fair and equitable manner, I've established qualification standards to follow when considering eligible individual or organisations.",
    "The donation request form must be completed and returned at least 9 weeks before the event.",
    "An organisation or individual is limited to only one donation receipt within a 12-month period.",
    "Please note, by applying for a donation you agree that any data provided will be stored and processed for the purpose of your application.",
  ],
};
