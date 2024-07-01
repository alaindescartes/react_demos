export const universityData = [
  {
    id: 1,
    name: "Tech University",
    type: "University",
    children: [
      {
        id: 2,
        name: "College of Engineering",
        type: "College",
        children: [
          {
            id: 3,
            name: "Department of Computer Science",
            type: "Department",
            children: [
              { id: 7, name: "Introduction to Programming", type: "Course" },
              { id: 8, name: "Data Structures", type: "Course" },
            ],
          },
          {
            id: 4,
            name: "Department of Electrical Engineering",
            type: "Department",
            children: [
              { id: 9, name: "Circuit Analysis", type: "Course" },
              { id: 10, name: "Electromagnetics", type: "Course" },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "College of Arts",
        type: "College",
        children: [
          {
            id: 6,
            name: "Department of Literature",
            type: "Department",
            children: [
              { id: 11, name: "World Literature", type: "Course" },
              { id: 12, name: "Modernist Poetry", type: "Course" },
            ],
          },
        ],
      },
    ],
  },
];
