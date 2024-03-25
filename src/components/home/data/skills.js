const skills = [
  {
    title: 'Java',
    competency: 4,
    category: ['Backend', 'Languages', 'Java', 'Mobile'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Backend', 'Languages', 'Python'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  }, {
    title: 'ReactJS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Swift',
    competency: 2,
    category: ['Mobile', 'Languages',],
  },
  {
    title: 'HTML-CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },

  {
    title: 'Spring',
    competency: 4,
    category: [ 'Frameworks', 'Java'],
  },
  
  {
    title: 'Django',
    competency: 3,
    category: ['Web Development', 'Frameworks', 'Python'],
  },{
    title: 'REST APIs',
    competency: 4,
    category: ['Web Development', 'Frameworks', 'Java', 'Python'],
  },{
    title: 'SOAP',
    competency: 4,
    category: [, 'Frameworks', ''],
  },
  {
    title: 'JUnit',
    competency: 4,
    category: ['Testing', 'Frameworks', 'Java'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Web Development', 'Frameworks', ''],
  },

  {
    title: 'PostgreSQL/MySQL/SQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'AWS DynamoDB',
    competency: 4,
    category: ['Databases', 'Amazon Web Services'],
  },
  {
    title: 'REDIS',
    competency: 2,
    category: ['Databases'],
  },

  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Methodologies and Tools', 'Amazon Web Services'],
  },

  {
    title: 'AWS CloudFormation',
    competency: 4,
    category: [, 'Amazon Web Services'],
  },
  {
    title: 'AWS EC2',
    competency: 4,
    category: [ 'Amazon Web Services'],
  },
  {
    title: 'AWS S3',
    competency: 4,
    category: [ 'Amazon Web Services'],
  },
  {
    title: 'AWS CloudWatch',
    competency: 4,
    category: [ 'Amazon Web Services'],
  },{
    title: 'AWS Lambda',
    competency: 4,
    category: ['Amazon Web Services'],
  },

  {
    title: 'Agile',
    competency: 4,
    category: ['Methodologies and Tools',],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Methodologies and Tools',],
  },
  {
    title: 'Jenkins',
    competency: 4,
    category: ['Methodologies and Tools',],
  },{
    title: 'Docker',
    competency: 4,
    category: ['Methodologies and Tools',],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Methodologies and Tools',],
  },
  {
    title: 'Apache Kafka',
    competency: 3,
    category: ['Methodologies and Tools',],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Methodologies and Tools',],
  },
  {
    title: 'JMeter-Selenium',
    competency: 4,
    category: ['Methodologies and Tools','Testing'],
  },

  
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  // '#6968b3',
  // '#37b1f5',
  // '#40494e',
  // '#515dd4',
  // '#e47272',
  // '#cc7b94',
  // '#3896e2',
  // '#c3423f',
  // '#d75858',
  // '#747fff',
  // '#64cb7b',
  // '#3b3b3b'
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
