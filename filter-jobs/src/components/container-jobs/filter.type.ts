export type TFilters = { [key: string]: TFilter };

export type TFilter = { [key: string]: boolean };

export type TFilterData = {
  type: string;
  value: string;
};
const filterRole: TFilter = { Frontend: true, Backend: false };
const filterLevel: TFilter = { Junior: false, Senior: true };

const allFilers: TFilters = { Role: filterRole, level: filterLevel };

// - Role: Frontend, Backend, Fullstack
// - Level: Junior, Midweight, Senior
// - Languages: Python, Ruby, JavaScript, HTML, CSS
// - Tools: React, Sass, Vue, Django, RoR (Ruby on Rails)
