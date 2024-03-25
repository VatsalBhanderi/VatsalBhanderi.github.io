import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";
// import Skills from './Skills';

import { skills, categories } from '../../editable-stuff/skills';
import PropTypes from 'prop-types';

import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';

const Skills = ( skills, categories ) => {
  const initialButtons = Object.fromEntries([['All', false]].concat(categories.map(({ name }) => [name, false])));

  const [buttons, setButtons] = useState(initialButtons);

  const handleChildClick = (label) => {
    // Toggle button that was clicked. Turn all other buttons off.
    const newButtons = Object.keys(buttons).reduce((obj, key) => ({
      ...obj,
      [key]: (label === key) && !buttons[key],
    }), {});
    // Turn on 'All' button if other buttons are off
    newButtons.All = !Object.keys(buttons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  const getRows = () => {
    // search for true active categories
    const actCat = Object.keys(buttons).reduce((cat, key) => (
      buttons[key] ? key : cat
    ), 'All');

    const comparator = (a, b) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    };

    return skills.sort(comparator).filter((skill) => (actCat === 'All' || skill.category.includes(actCat)))
      .map((skill) => (
        <SkillBar
          categories={categories}
          data={skill}
          key={skill.title}
        />
      ));
  };

  const getButtons = () => Object.keys(buttons).map((key) => (
    <CategoryButton
      label={key}
      key={key}
      active={buttons}
      handleClick={handleChildClick}
    />
  ));

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>Skills</h3>
        <p>Note: I think these sections are silly, but everyone seems to have one.
          Here is a *mostly* honest overview of my skills.
        </p>
      </div>
      <div className="skill-button-container">
        {getButtons()}
      </div>
      <div className="skill-row-container">
        {getRows()}
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    competency: PropTypes.number,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

// const Skills = (<Skills skills={skills} categories={categories} />);

// const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
//   const skillsTabRef = React.useRef(null);
//   const [isScrolled, setIsScrolled] = React.useState(false);
//   //const navbarDimensions = useResizeObserver(navbarMenuRef);

//   useScrollPosition(
//     ({ prevPos, currPos }) => {
//       if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
//     },
//     [],
//     skillsTabRef
//   );
//   return (
//     <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
//       <Container className="p-5 ">
//         <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
//           {heading}
//         </h2>
//         <Tabs
//           className="skills-tabs"
//           defaultActiveKey="hard-skills"
//           id="skills-tabs"
//           fill
//         >
//           <Tab
//             tabClassName="skills-tab lead"
//             eventKey="hard-skills"
//             title="Technical Skills"
//           >
//             <Row className="pt-3 px-1">
//               <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
//             </Row>
//           </Tab>
//           <Tab
//             tabClassName="skills-tab lead"
//             eventKey="soft-skills"
//             title="Soft Skills"
//           >
//             <Row className="pt-3 px-1">
//               <SkillsTab skills={softSkills} isScrolled={isScrolled} />
//             </Row>
//           </Tab>
//         </Tabs>
//       </Container>
//     </Jumbotron>
//   );
// });

export default Skills;
