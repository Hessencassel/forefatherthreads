export interface QuizQuestion {
  id: number;
  question: string;
  options: [string, string, string, string];
  correct: number; // 0-indexed
  explanation: string;
}

export const ALL_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How many amendments does the U.S. Constitution currently have?",
    options: ["25", "27", "29", "32"],
    correct: 1,
    explanation:
      "The Constitution has 27 amendments. The first ten, ratified in 1791, are known as the Bill of Rights.",
  },
  {
    id: 2,
    question: "Which amendment abolished slavery?",
    options: ["13th", "14th", "15th", "16th"],
    correct: 0,
    explanation:
      "The 13th Amendment, ratified December 6, 1865, formally abolished slavery and involuntary servitude except as punishment for a crime.",
  },
  {
    id: 3,
    question: "The First Amendment protects which of the following?",
    options: [
      "The right to bear arms",
      "Freedom of speech, religion, press, assembly, and petition",
      "Protection against unreasonable searches",
      "The right to a speedy trial",
    ],
    correct: 1,
    explanation:
      "The First Amendment protects five fundamental freedoms: religion, speech, press, assembly, and the right to petition the government.",
  },
  {
    id: 4,
    question: "What is the supreme law of the land according to Article VI?",
    options: [
      "Federal statute law",
      "Executive Orders",
      "The Constitution",
      "Supreme Court decisions",
    ],
    correct: 2,
    explanation:
      "Article VI establishes the Constitution as the supreme law of the land — the Supremacy Clause. All laws and treaties must conform to it.",
  },
  {
    id: 5,
    question: "How old must a person be to run for President?",
    options: ["30", "35", "40", "45"],
    correct: 1,
    explanation:
      "Article II requires the President to be at least 35 years old, a natural born citizen, and a resident for 14 years.",
  },
  {
    id: 6,
    question: "Which amendment gives citizens the right to bear arms?",
    options: ["1st", "2nd", "3rd", "4th"],
    correct: 1,
    explanation:
      "The 2nd Amendment states: 'A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.'",
  },
  {
    id: 7,
    question: "How many senators does each state have?",
    options: ["1", "2", "3", "Depends on population"],
    correct: 1,
    explanation:
      "Article I gives each state two senators regardless of population size, ensuring equal state representation in the Senate.",
  },
  {
    id: 8,
    question: "What are the three branches of the U.S. government?",
    options: [
      "Federal, State, Local",
      "Executive, Legislative, Judicial",
      "Senate, House, Supreme Court",
      "President, Congress, Military",
    ],
    correct: 1,
    explanation:
      "Articles I, II, and III establish the three branches: Legislative (Congress), Executive (President), and Judicial (Supreme Court).",
  },
  {
    id: 9,
    question: "The 4th Amendment protects against which of the following?",
    options: [
      "Self-incrimination",
      "Double jeopardy",
      "Unreasonable searches and seizures",
      "Cruel and unusual punishment",
    ],
    correct: 2,
    explanation:
      "The 4th Amendment protects citizens from unreasonable searches and seizures and requires warrants to be judicially sanctioned and supported by probable cause.",
  },
  {
    id: 10,
    question: "How many articles does the original Constitution contain?",
    options: ["5", "6", "7", "10"],
    correct: 2,
    explanation:
      "The original Constitution contains 7 articles covering the legislative branch, executive branch, judicial branch, states relations, amendments process, supremacy clause, and ratification.",
  },
];

export function selectQuestions(count = 5): QuizQuestion[] {
  const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
