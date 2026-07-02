import ConstitutionChallengeQuiz from '../components/ui/ConstitutionChallenge';
import { pageMeta } from '../lib/seo';

export function meta() {
  return pageMeta({
    title: 'The Constitution Challenge | Take the Quiz',
    description:
      'Five questions. Do you know the document as well as you think you do? Take the Constitution Challenge and find out.',
    path: '/constitution-challenge',
  });
}

export default function ConstitutionChallengePage() {
  return <ConstitutionChallengeQuiz />;
}
