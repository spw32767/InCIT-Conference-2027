import { SpeakerProfiles, type SpeakerProfile } from './keynote-speakers';

const invited: SpeakerProfile[] = [
  { name: 'Prof. Elian Brooks', role: 'Professor of Computer Science', affiliation: 'Example University, Example Country',
    title: 'Understanding Visual Data with Intelligent Systems',
    abstract: 'This sample invited talk explores how intelligent systems can interpret visual data. It introduces a fictional research scenario, discusses the evaluation of model outputs, and considers how people can review and understand the results.',
    biography: 'Elian Brooks is a fictional professor at Example University. This sample biography demonstrates the invited speaker profile layout.' },
  { name: 'Dr. Nara Whitfield', role: 'Robotics Researcher', affiliation: 'Example Robotics Institute, Example Country',
    title: 'Adaptive Robots for Changing Environments',
    abstract: 'This sample talk introduces a fictional project on robots that adapt to changing surroundings. It considers sensing, movement, and feedback, and explores how simulation can help teams examine the behavior of a robotic system.',
    biography: 'Nara Whitfield is a fictional researcher at Example Robotics Institute. This sample biography is a placeholder for a confirmed speaker.' },
  { name: 'Dr. Theo Marlow', role: 'Associate Professor', affiliation: 'Example Institute of Technology, Example Country',
    title: 'Exploring Digital Models and Human Decision-Making',
    abstract: 'This sample talk considers how digital models can help people explore different scenarios. A fictional example illustrates the relationship between data, simulation, and human judgment, with attention to the limitations of a model.',
    biography: 'Theo Marlow is a fictional associate professor at Example Institute of Technology. This profile contains illustrative information only.' },
  { name: 'Dr. Iris Vale', role: 'Research Fellow', affiliation: 'Example Digital Research Center, Example Country',
    title: 'Building Resilient Digital Services',
    abstract: 'This sample talk explores how teams can prepare digital services for disruption. It uses a fictional service scenario to discuss monitoring, recovery, and communication, and considers how design choices affect the people who depend on a service.',
    biography: 'Iris Vale is a fictional research fellow at Example Digital Research Center. Replace this sample biography with approved speaker information.' },
];

const tutorials: SpeakerProfile[] = [
  { name: 'Dr. Ada Fenwick', role: 'Tutorial Instructor', affiliation: 'Example Data Institute, Example Country',
    title: 'A Practical Introduction to Data Exploration',
    abstract: 'This sample tutorial introduces a fictional dataset and a sequence of exercises for exploring it. Participants examine data quality, compare simple visualizations, and practice explaining their observations. The exercises are illustrative placeholders for a future tutorial.',
    biography: 'Ada Fenwick is a fictional instructor at Example Data Institute. This sample profile demonstrates the tutorial instructor layout.' },
  { name: 'Prof. Rowan Ellis', role: 'Tutorial Instructor', affiliation: 'Example Computing University, Example Country',
    title: 'Computing Concepts Through Interactive Experiments',
    abstract: 'This sample tutorial uses fictional exercises to introduce computing concepts. Participants explore small models, compare different inputs, and discuss how an experiment can support understanding. The tutorial description is sample content and does not describe a confirmed session.',
    biography: 'Rowan Ellis is a fictional professor at Example Computing University. This biography is a placeholder for confirmed instructor information.' },
  { name: 'Dr. Sora Bennett', role: 'Tutorial Instructor', affiliation: 'Example AI Research Institute, Example Country',
    title: 'Evaluating Language Models with Sample Tasks',
    abstract: 'This sample tutorial outlines an illustrative exercise for comparing language-model outputs. Participants define sample tasks, record observations, and discuss evaluation criteria. All exercises and session details are placeholders for the layout preview.',
    biography: 'Sora Bennett is a fictional instructor at Example AI Research Institute. No real biography or external profile is used in this sample.' },
];

export function InvitedSpeakers() {
  return <SpeakerProfiles title="Invited Speakers" pageKey="invited-speakers" speakers={invited} note="Fictional speakers, affiliations and talk descriptions. Portraits are placeholders. Replace with confirmed InCIT 2027 information." />;
}

export function Tutorials() {
  return <SpeakerProfiles title="Tutorials" pageKey="tutorials" speakers={tutorials} note="Fictional instructors, affiliations and tutorial descriptions. Portraits are placeholders. Replace with confirmed InCIT 2027 information." />;
}
