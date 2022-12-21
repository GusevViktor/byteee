
export const columns = [
  {
    title: "Event",
    dataIndex: "event",
    key: "Event",
    width: "40%",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "Date",
    width: "20%",
    sort: true,
  },
  {
    title: "Registered",
    dataIndex: "registered",
    key: "Registered",
    width: "20%",
    sort: true,
  },
  {
    title: "Attended",
    dataIndex: "attended",
    key: "Attended",
    width: "20%",
    sort: true,
  },
  {
    title: "",
    dataIndex: "settings",
    key: "Settings",
    width: "70px",
  },
];

export const dataMock = [
  {
    key: "1",
    event: "North America HoloLines Industry Summit",
    date: "2022-08-12T14:35",
    registered: "2342",
    attended: "223",
    settings: "",
    status: "",
  },
  {
    key: "2",
    event: "Addressing challenges in the Cell & Gene Therapy industry",
    date: "2022-09-15T04:35",
    registered: "2342",
    attended: "223",
    settings: "",
    status: "Past",
  },
  {
    key: "3",
    event: "Luxembourg Calling House of DeepTech Showcase",
    date: "2022-11-01T04:35",
    registered: "2342",
    attended: "223",
    settings: "",
    status: "Upcoming",
  },
];