import { Courses } from "./app/shared/models/Courses";
import { Tag } from "./app/shared/models/Tag";

export const courses: Courses[] = [
  {id: 1, title: 'Angular', description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.', ImageUrl: 'https://angular.io/assets/images/logos/angular/angular.png', created_at: new Date(), duration: 30, course_id: 1, tags: ['Frontend'], price: 100 },
    {id: 2, title: 'React', description: 'React is a JavaScript library for building user interfaces.', ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', created_at: new Date(), duration: 30, course_id: 2 , tags: ['Frontend'], price: 120 },
    {id: 3, title: 'Vue', description: 'Vue.js is a progressive framework for building user interfaces.', ImageUrl: 'https://vuejs.org/images/logo.png', created_at: new Date(), duration: 30, course_id: 3 , tags: ['Frontend'], price: 110 },
    {id: 4, title: 'Node.js', description: 'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.', ImageUrl: 'https://nodejs.org/static/images/logo.svg', created_at: new Date(), duration: 30, course_id: 4 , tags: ['Backend'], price: 130 },
    {id: 5, title: 'MongoDB', description: 'MongoDB is a source-available cross-platform document-oriented database program.', ImageUrl: 'https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png', created_at: new Date(), duration: 30, course_id: 5 , tags: ['Database'], price: 140 },
    {id: 6, title: 'SQL', description: 'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.', ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', created_at: new Date(), duration: 30, course_id: 6 , tags: ['Database'], price: 150 },
    {id : 7, title: 'Python', description: 'Python is an interpreted high-level general-purpose programming language.', ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', created_at: new Date(), duration: 30, course_id: 8 , tags: ['Frontend'], price: 170 },
    {id : 8, title: 'Java', description: 'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.', ImageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg', created_at: new Date(), duration: 30, course_id: 9 , tags: ['Frontend'], price: 180 },
    {id : 9, title: 'Cyber Security', description: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.', ImageUrl: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=800', created_at: new Date(), duration: 30, course_id: 10 , tags: ['Security'], price: 190 },
    {id :10, title:'RedTeam', description: 'Red teaming is the practice of rigorously challenging an organizations plans, policies, systems and assumptions by applying an adversarial approach.', ImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800', created_at: new Date(), duration: 30, course_id: 11 , tags: ['Security'], price: 200 },
    {id :11, title:'BlueTeam', description: 'Blue teaming is the practice of rigorously challenging an organizations plans, policies, systems and assumptions by applying an adversarial approach.', ImageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800', created_at: new Date(), duration: 30, course_id: 12 , tags: ['Security'], price: 210 },
];
export const tags:Tag[] = [
  {name: 'All', count: 7},
  {name: 'Frontend', count: 3},
  {name: 'Backend', count: 1},
  {name: 'Database', count: 2},
  {name: 'Security', count: 1},
];