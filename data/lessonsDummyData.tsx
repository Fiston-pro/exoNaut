export const lessonsDummyData = [
    // we want to have multiple units and each unit to have multiple lessons
    {
      id: 1,
      name: "Unit 1",
      lessons: [
        {
          id: 1,
          name: "Lesson 1",
          description: "Description of Lesson 1",
          video: "/images/planets/planet_img_1.png",
          question: "Question 1",
          answer: [
            {
              id: 1,
              text: "Answer 1",
              isCorrect: true,
            },
            {
              id: 2,
              text: "Answer 2",
              isCorrect: false,
            },
            {
              id: 3,
              text: "Answer 3",
              isCorrect: false,
            },
            {
              id: 4,
              text: "Answer 4",
              isCorrect: false,
            },
          ],
        },
        {
          id: 2,
          name: "Lesson 2",
          description: "Description of Lesson 2",
          video: "/images/planets/planet_img_2.png",
          question: "Question 2",
          answer: [
            {
              id: 1,
              text: "Answer 1",
              isCorrect: true,
            },
            {
              id: 2,
              text: "Answer 2",
              isCorrect: false,
            },
            {
              id: 3,
              text: "Answer 3",
              isCorrect: false,
            },
            {
              id: 4,
              text: "Answer 4",
              isCorrect: false,
            },
          ],
        }
      ],
    },
    {
      id: 2,
      name: "Unit 2",
      lessons: [
        {
          id: 3,
          name: "Lesson 1",
          description: "Description of Lesson 1",
          video: "/images/planets/planet_img_3.png",
          question: "Question 1",
          answer: [
            {
              id: 1,
              text: "Answer 1",
              isCorrect: true,
            },
            {
              id: 2,
              text: "Answer 2",
              isCorrect: false,
            },
            {
              id: 3,
              text: "Answer 3",
              isCorrect: false,
            },
            {
              id: 4,
              text: "Answer 4",
              isCorrect: false,
            },
          ],
        },
      ],
    },
  ];