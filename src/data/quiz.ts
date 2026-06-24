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
  {
    id: 11,
    question: "Which article of the Constitution establishes the Executive Branch?",
    options: ["Article I", "Article II", "Article III", "Article IV"],
    correct: 1,
    explanation:
      "Article II establishes the Executive Branch, defining the powers and responsibilities of the President, including serving as Commander in Chief of the armed forces.",
  },
  {
    id: 12,
    question: "The Bill of Rights refers to which amendments?",
    options: ["1–5", "1–8", "1–10", "1–12"],
    correct: 2,
    explanation:
      "The Bill of Rights is the collective name for the first ten amendments to the Constitution, ratified on December 15, 1791.",
  },
  {
    id: 13,
    question: "Which amendment prohibits quartering soldiers in private homes without consent?",
    options: ["2nd", "3rd", "4th", "5th"],
    correct: 1,
    explanation:
      "The 3rd Amendment states that no soldier shall be quartered in any house without the consent of the owner in time of peace.",
  },
  {
    id: 14,
    question: "What does the 5th Amendment protect against?",
    options: [
      "Unreasonable searches",
      "Cruel and unusual punishment",
      "Self-incrimination and double jeopardy",
      "Excessive bail",
    ],
    correct: 2,
    explanation:
      "The 5th Amendment protects against self-incrimination, double jeopardy, and guarantees due process of law. 'Pleading the Fifth' comes from this amendment.",
  },
  {
    id: 15,
    question: "How many votes in the Senate are required to ratify a treaty?",
    options: ["Simple majority (51)", "Two-thirds (67)", "Three-quarters (75)", "Unanimous"],
    correct: 1,
    explanation:
      "Article II requires a two-thirds supermajority of the Senate — 67 votes — to ratify treaties negotiated by the President.",
  },
  {
    id: 16,
    question: "Which amendment gave women the right to vote?",
    options: ["17th", "18th", "19th", "20th"],
    correct: 2,
    explanation:
      "The 19th Amendment, ratified August 18, 1920, prohibits denying the right to vote based on sex, effectively granting women the right to vote.",
  },
  {
    id: 17,
    question: "How many representatives does each state have in the House?",
    options: ["2", "Equal to Senate seats", "Based on population", "5 minimum"],
    correct: 2,
    explanation:
      "Article I establishes that House seats are apportioned based on population, determined by census every ten years. Larger states have more representatives.",
  },
  {
    id: 18,
    question: "What is the term length of a U.S. Senator?",
    options: ["2 years", "4 years", "6 years", "8 years"],
    correct: 2,
    explanation:
      "Article I establishes six-year terms for senators, with approximately one-third of the Senate up for election every two years to ensure continuity.",
  },
  {
    id: 19,
    question: "Which amendment abolished the poll tax?",
    options: ["22nd", "23rd", "24th", "25th"],
    correct: 2,
    explanation:
      "The 24th Amendment, ratified January 23, 1964, abolished the poll tax — a fee required to vote that was used to disenfranchise poor citizens, particularly Black Americans in the South.",
  },
  {
    id: 20,
    question: "What does the 10th Amendment reserve to the states?",
    options: [
      "The right to taxation",
      "Powers not delegated to the federal government",
      "Control of interstate commerce",
      "The right to maintain militias",
    ],
    correct: 1,
    explanation:
      "The 10th Amendment states that powers not delegated to the federal government by the Constitution, nor prohibited to the states, are reserved to the states or to the people.",
  },
  {
    id: 21,
    question: "How many electoral votes are needed to win the presidency?",
    options: ["218", "270", "300", "538"],
    correct: 1,
    explanation:
      "A candidate needs 270 of the 538 total electoral votes to win the presidency. Each state receives electoral votes equal to its total Congressional representation.",
  },
  {
    id: 22,
    question: "Which article establishes the Supreme Court?",
    options: ["Article I", "Article II", "Article III", "Article IV"],
    correct: 2,
    explanation:
      "Article III establishes the judicial branch and the Supreme Court. It defines the Court's jurisdiction and extends judicial power to cases arising under the Constitution.",
  },
  {
    id: 23,
    question: "The phrase 'We the People' opens which part of the Constitution?",
    options: ["Article I", "The Bill of Rights", "The Preamble", "Article VII"],
    correct: 2,
    explanation:
      "The Preamble opens with 'We the People of the United States' and establishes the purposes for which the Constitution was created.",
  },
  {
    id: 24,
    question: "Which amendment limits the President to two terms?",
    options: ["20th", "21st", "22nd", "23rd"],
    correct: 2,
    explanation:
      "The 22nd Amendment, ratified February 27, 1951, limits the President to two elected terms. It was passed largely in response to Franklin D. Roosevelt serving four terms.",
  },
  {
    id: 25,
    question: "What is required to amend the Constitution?",
    options: [
      "Simple majority in both houses",
      "Two-thirds of both houses plus three-fourths of states",
      "Presidential approval plus Senate two-thirds vote",
      "Supreme Court approval plus majority vote in Congress",
    ],
    correct: 1,
    explanation:
      "Article V requires two-thirds of both the House and Senate to propose an amendment, then three-fourths of state legislatures (38 of 50) must ratify it. This intentionally high bar ensures amendments reflect broad national consensus.",
  },
];

export function selectQuestions(count = 5): QuizQuestion[] {
  const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
