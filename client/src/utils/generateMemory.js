export default function generateMemory(profile){

return{

identity:

`${profile.status} ${profile.occupation}`,

goal:

profile.goals[0] || "",

challenge:

profile.customProblem ||

profile.problems.join(", "),

language:

profile.readingExperience.language,

mode:

profile.readingExperience.mode,

guidance:

profile.guidanceStyle,

readingLevel:

profile.readingLevel,

};

}